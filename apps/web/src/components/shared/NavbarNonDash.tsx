import Link from "next/link";
import Image from "next/image";
import c from "config";
import { Button } from "../shadcn/ui/button";
import ProfileButton from "./ProfileButton";
import { auth, currentUser } from "@clerk/nextjs";
import NavBarLinksGrouper from "./NavBarLinksGrouper";
import { Oswald } from "next/font/google";
import { cn } from "@/lib/utils/client/cn";
import { getUser } from "db/functions";
import "./Nav.css";
import DashNavItem from "../dash/shared/DashNavItem";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

interface NavbarNonDashProps {
	className?: string;
	title: string;
}

export default async function NavbarNonDash({
	className,
	title,
}: NavbarNonDashProps) {
	const user = await currentUser();
	const registrationIsComplete =
		user != null && (await getUser(user.id)) != undefined;
	return (
		<div className="fixed z-50 w-screen">
			<div className={cn(`relative top-0 z-50 h-16 w-screen`, className)}>
				<div className="mx-auto grid h-full w-full max-w-7xl grid-flow-col grid-cols-2 px-2 sm:px-5 lg:max-w-full lg:px-5">
					<div className="col-span-3 flex items-center justify-start gap-x-5 pl-4 md:pl-0">
						<Link href="/">
							<Image
								src={"/img/static/images/white wehack logo.png"}
								alt={c.hackathonName + " Logo"}
								width={32}
								height={32}
							/>
						</Link>

						<div className="h-[45%] w-[2px] rotate-[25deg] bg-muted-foreground" />
						<h2 className="font-bold tracking-wide">{title}</h2>
					</div>

					<div className="flex items-center justify-between space-x-5 pr-2 md:justify-center md:pr-0">
						<div className="gap-x-4 md:flex">
							{user ? (
								<>
									<Link
										href={
											registrationIsComplete
												? "/dash"
												: "/register"
										}
									>
										<Button className="primary-btn w-full bg-[#D09C51] px-5 py-3 text-[#FFE9D7] hover:bg-[#CCBA97]">
											{registrationIsComplete
												? "Dashboard"
												: "Complete Registration"}
										</Button>
									</Link>
								</>
							) : (
								<>
									<Link href={"/sign-in"}>
										<Button className="primary-btn w-full bg-[#A6CDC4] px-5 py-3 text-[#282738] hover:bg-[#6e8d85]">
											Sign In
										</Button>
									</Link>
									<Link href={"/register"}>
										<Button className="primary-btn w-full bg-[#A6CDC4] px-5 py-3 text-[#282738] hover:bg-[#6e8d85]">
											Register
										</Button>
									</Link>
								</>
							)}
						</div>
						<div className="relative">
							<ProfileButton />
						</div>
					</div>
				</div>
				{/* <div className="flex h-12 w-full border-b border-b-border bg-nav px-5">
					{Object.entries(c.dashPaths.dash).map(([name, path]) => (
						<DashNavItem key={name} name={name} path={path} />
					))}
				</div> */}
			</div>
		</div>
	);
}

export const runtime = "edge";
