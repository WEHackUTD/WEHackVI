import QRCode from "react-qr-code";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import c from "config";
import { format } from "date-fns";
import TiltWrapper from "@/components/dash/shared/TiltWrapper";
import { createQRpayload } from "@/lib/utils/shared/qr";
import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
} from "@/components/shadcn/ui/drawer";
import { getHacker } from "db/functions";
import { Hacker } from "db/types";

interface EventPassProps {
	user: Hacker;
	clerk: NonNullable<Awaited<ReturnType<typeof currentUser>>>;
	qrPayload: string;
	guild: number;
}

export default async function Page() {
	const user = await currentUser();
	if (!user) return null;

	const userDbRecord = await getHacker(user.id, false);
	if (!userDbRecord) return null;

	const qrPayload = createQRpayload({
		userID: user.id,
		createdAt: new Date(),
	});
	// const guild = Object.keys(c.groups)[userDbRecord.hackerData.group];

	const dietaryGroup =  {
		"Vegan": 1,
		"Gluten-Free": 1, 
		"Vegetarian": 2, 
		"Halal": 2,
		"None": 3,
	}

	var groupNumber = 1; // for those who put eggs, wheat, none, etc
	// assign hackers groups based on their dietary restriction
	const dietaryRestrictions = Array.isArray(userDbRecord.dietRestrictions) ? userDbRecord.dietRestrictions : [];
	// console.log(dietaryRestrictions)
	// for (let i = 0; i < dietaryRestrictions.length; i++) {
	// 	if(dietaryRestrictions.includes("Vegan") || dietaryRestrictions.includes("Gluten-Free")) {
	// 		groupNumber = 1;
	// 		break;
	// 	}
	// 	else if(dietaryRestrictions[i] === "Vegetarian" || dietaryRestrictions[i] === "Halal") {
	// 		groupNumber = 2;
	// 		break;
	// 	}
	// 	else if(dietaryRestrictions[i] === "None" && dietaryRestrictions.length === 1) {
	// 		groupNumber = 3;
	// 		break;
	// 	}
	// 	else {
	// 		continue;
	// 	}
	// }
	if(dietaryRestrictions.includes("Vegan") || dietaryRestrictions.includes("Gluten-Free")) {
		groupNumber = 1;
	}
	else if(dietaryRestrictions.includes("Vegetarian") || dietaryRestrictions.includes("Halal")) {
		groupNumber = 2;
	}
	else if (dietaryRestrictions.includes("None") && dietaryRestrictions.length == 1) {
		groupNumber = 3;
	}
	else {
		groupNumber = 1;
	}
	// console.log(groupNumber)

	return (
		<div className="flex min-h-[calc(100vh-7rem)] items-center justify-center bg-nav">
			<TiltWrapper>
				<EventPass
					user={userDbRecord}
					qrPayload={qrPayload}
					clerk={user}
					guild={groupNumber}
				/>
			</TiltWrapper>
		</div>
	);
}

function EventPass({ qrPayload, user, clerk, guild }: EventPassProps) {
	return (
		<div className="relative my-20 h-max px-5">
			<div className="absolute left-1/2 top-0 z-10 h-[75px] w-[75px] -translate-x-1/2 -translate-y-[50%] rotate-45 rounded-full border-2 border-background border-b-border border-r-border bg-background dark:border" />
			<div className="flex aspect-[9/17] w-full max-w-[400px] flex-col overflow-hidden rounded-3xl border-2 border-border bg-background py-[37.5px] dark:border">
				<div className="relative md:mt-20 flex h-[30%] w-full flex-col items-center pt-10 lg:pt-2 space-y-2">
					<Image
						src={clerk.imageUrl}
						alt={`${user.firstName}'s Profile Picture`}
						width={100}
						height={100}
						className="mx-auto rounded-full"
					/>
					<h1 className="mt-2 text-center text-3xl font-bold break-all px-3">
						{user.firstName}
					</h1>
					<div className="flex flex-col w-full items-center justify-center">
						<h3 className="text-center font-mono text-sm">
							@{user.hackerTag}
						</h3>
						<h3 className="text-center font-mono text-sm">
							{(() => {
								if (guild === 1) return "Group Cassette";
								if (guild === 2) return "Group Jukebox";
								if (guild === 3) return "Group Disco";
							})()}
						</h3>
					</div>
				</div>
				<div className="event-pass-img relative mt-24 md:mt-10 flex w-full">
					<div className="absolute left-1/2 top-1/2 aspect-square w-[200px] -translate-x-1/2 -translate-y-[65%] bg-[#c37288] opacity-40 blur-[50px] will-change-transform"></div>
					{/* <Image
						src={c.eventPassBgImage}
						alt={""}
						fill
						className="no-select -translate-y-[15%] scale-[0.8] object-contain"
					/> */}
					<div className="flex w-full flex-col items-center justify-center">
						<div className="flex h-full w-full items-center justify-center pl-2">
							{/* <Image
								src={c.icon.svg}
								height={60}
								width={60}
								alt={``}
							/> */}
							<h1 className="ml-1 text-2xl font-bold leading-tight">
								{c.hackathonName}{" "}
								<span className="text-hackathon">
									{c.itteration}
								</span>
							</h1>
						</div>
						<div className="flex h-full w-full flex-col items-center justify-center gap-y-1">
							<p className="font-mono text-xs">
								{`${format(
								c.startDate,
								"h:mma, MMM d, yyyy",
							)}`}
								{/* 9:00 AM, April 5, 2025 */}
							</p>
							<p className="px-10 text-center font-mono text-xs">
								{c.prettyLocation}
							</p>
						</div>
					</div>
				</div>
				<div className="mt-5 flex h-[25%] w-full items-center justify-center border-dashed border-muted">
					<Drawer>
						<DrawerTrigger asChild>
							<div className="flex aspect-square h-[90%] items-center justify-center overflow-x-hidden rounded-xl border-2 border-dashed border-muted p-2">
								<QRCode
									className="h-full"
									bgColor="hsl(var(--background))"
									fgColor="hsl(var(--primary))"
									value={qrPayload}
								/>
							</div>
						</DrawerTrigger>
						<DrawerContent className="flex h-[90%] w-full items-center justify-center focus-visible:outline-none">
							<QRCode
								className="h-full"
								bgColor="hsl(var(--background))"
								fgColor="hsl(var(--primary))"
								value={qrPayload}
							/>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
			<div className="absolute bottom-0 left-1/2 z-10 h-[75px] w-[75px] -translate-x-1/2 translate-y-[50%] rotate-45 rounded-full border-2 border-background border-l-border border-t-border bg-background dark:border" />
		</div>
	);
}

export const runtime = "edge";
