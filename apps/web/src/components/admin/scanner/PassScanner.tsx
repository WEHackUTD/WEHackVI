"use client";

import { useState, useEffect } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import superjson from "superjson";
import { createScan } from "@/actions/admin/scanner-admin-actions";
import { useAction } from "next-safe-action/hooks";
import { type QRDataInterface } from "@/lib/utils/shared/qr";
import type { Scan, Event, Hacker } from "db/types";
import c from "config";

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "@/components/shadcn/ui/drawer";
import { Button } from "@/components/shadcn/ui/button";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useRef } from "react";
import { getScan } from "@/actions/admin/scanner-admin-actions";

/*

Pass Scanner Props:

eventName: name of the event that the user is scanning into
hasScanned: if the state has eventered one in which a QR has been scanned (whether that scan has scanned before or not)
scan: the scan object that has been scanned. If they have not scanned before scan will be null leading to a new record or if they have then it will incriment the scan count.

*/

interface PassScannerProps {
	event: Event;
	hasScanned: boolean;
	scan: Scan | null;
	scanUser: Hacker | null;
}

export default function PassScanner({
	event,
	hasScanned,
	scan,
	scanUser,
}: PassScannerProps) {
	const [scanLoading, setScanLoading] = useState(false);
	const [alreadyScanned, setAlreadyScanned] = useState<Scan | null>(scan);
	const [scanned, setHasScanned] = useState(false);
	// const [alreadyScanned, setAlreadyScanned] = useState(null);
	const { execute: runScanAction } = useAction(createScan, {});

	useEffect(() => {
		if (scanned) {
			setScanLoading(false);
		}
	}, [scanned]);

	const searchParams = useSearchParams();
	const path = usePathname();
	const router = useRouter();

	const register = scanUser?.checkinTimestamp
		? "Checked in!"
		: "Not Checked In";
	const guild =
		Object.keys(c.groups)[scanUser?.hackerData.group || 0] ?? "None";
	const role = scanUser?.role ? scanUser?.role : "Not Found";

	async function handleScanCreate() {
		const params = new URLSearchParams(searchParams.toString());
		const timestamp = parseInt(params.get("createdAt") as string);
		if (isNaN(timestamp)) {
			return alert("Invalid QR Code Data (Field: createdAt)");
		}

		console.log(`Checking scan for eventId: ${event.id}, userId: ${scanUser?.clerkID}, scanUser: ${scanUser}`);
			// const isDuplicate = await getScan({
			// 	eventID: event.id,
			// 	userID: scanUser?.clerkID as string,
			// });

			// console.log(isDuplicate?.data);
			// if(isDuplicate?.data) {
			// 	  toast.error("This user has already been scanned.");
			// 	  return;
			// }
			// else {
			// 	// TODO: make this a little more typesafe
			// 	runScanAction({
			// 		eventID: event.id,
			// 		userID: scanUser?.clerkID as string,
			// 		countToSet: 1,
			// 		alreadyExists: false,
			// 		creationTime: new Date(timestamp),
			// 	});
			// }
			// toast.success("Successfully Scanned User In");
			// router.replace(`${path}`);

		// if (localScan) {
		// 	console.log('inside localScan ', localScan);
		// 	const isDuplicate = await getScan({
		// 		eventID: event.id,
		// 		userID: localScan.userID,
		// 	});
			
		// 	console.log(isDuplicate);
		// 	if(isDuplicate) {
		// 		setLocalScan({
		// 			...localScan,
		// 			count: localScan.count,
		// 		  });
		// 		  toast.error("This user has already been scanned.");
		// 		  runScanAction({
		// 			eventID: event.id,
		// 			userID: scanUser?.clerkID as string,
		// 			countToSet: localScan.count,  
		// 			alreadyExists: true,
		// 			creationTime: new Date(timestamp),
		// 		  });
		// 		  return;
		// 	}
		if(scan) {
			const isDuplicate = await getScan({
				eventID: event.id,
				userID: scan.userID,
			});
			console.log(isDuplicate);
			if(isDuplicate) {
				  toast.error("This user has already been scanned.");
				  setAlreadyScanned(isDuplicate.data ?? null);
				  console.log('value of isDuplicate', isDuplicate);
				  console.log('value of alreadyScanned: ', alreadyScanned);
				  setHasScanned(true);
				//   runScanAction({
				// 	eventID: event.id,
				// 	userID: scanUser?.clerkID as string,
				// 	countToSet: scan.count,  
				// 	alreadyExists: true,
				// 	creationTime: new Date(timestamp),
				//   });
				  return;
			}
		} else {
			// TODO: make this a little more typesafe
			setHasScanned(false);
			setAlreadyScanned(null);
			runScanAction({
				eventID: event.id,
				userID: scanUser?.clerkID as string,
				countToSet: 1,
				alreadyExists: false,
				creationTime: new Date(timestamp),
			});
		}
		toast.success("Successfully Scanned User In");
		router.replace(`${path}`);
	}

	return (
		<>
			<div className="flex h-dvh flex-col items-center justify-center pt-32">
				<div className="flex w-screen flex-col items-center justify-center gap-5">
					<div className="mx-auto aspect-square w-screen max-w-[500px] overflow-hidden">
						<QrScanner
							onDecode={(result) => {
								const params = new URLSearchParams(
									searchParams.toString(),
								);
								if (!params.has("user")) {
									setScanLoading(true);
									console.log('have i been scanned ', scanned);
									// setAlreadyScanned(scan);
									const qrParsedData =
										superjson.parse<QRDataInterface>(
											result,
										);
									params.set("user", qrParsedData.userID);
									params.set(
										"createdAt",
										qrParsedData.createdAt
											.getTime()
											.toString(),
									);
									router.replace(
										`${path}?${params.toString()}`,
									);
								}
							}}
							onError={(error) => console.log(error?.message)}
							containerStyle={{
								width: "100vw",
								maxWidth: "500px",
								margin: "0",
							}}
						/>
					</div>
					<div className="mx-auto flex w-screen max-w-[500px] justify-center gap-x-2 overflow-hidden">
						<Link href={"/admin/events"}>
							<Button>Return To Events</Button>
						</Link>
					</div>
				</div>
			</div>
			<Drawer
				onClose={() => router.replace(path)}
				open={scanned || scanLoading}
			>
				<DrawerContent>
					{scanLoading ? (
						<>
							<DrawerHeader>
								<DrawerTitle>Loading Scan...</DrawerTitle>
								<DrawerDescription></DrawerDescription>
							</DrawerHeader>
							<DrawerFooter>
								<Button
									onClick={() => router.replace(path)}
									variant="outline"
								>
									Cancel
								</Button>
							</DrawerFooter>
						</>
					) : (
						<>
							<DrawerHeader>
								<DrawerTitle>
									New Scan for {event.title}
								</DrawerTitle>
								<DrawerDescription className="flex flex-col">
									<>
										{scanUser?.firstName}{" "}
										{scanUser?.lastName}
									</>
									<h2>
										<span className="font-bold">Role:</span>{" "}
										{role}
									</h2>
									<h2>
										<span className="font-bold">
											Status:
										</span>{" "}
										{register}
									</h2>
									{/* <h2>
										<span className="font-bold">
											Guild:
										</span>{" "}
										{guild}
									</h2> */}
								</DrawerDescription>
							</DrawerHeader>
							<DrawerFooter>
								<Button onClick={() => handleScanCreate()}>
									{alreadyScanned
										? "Add Additional Scan"
										: "Scan User In"}
								</Button>
								<Button
									onClick={() => router.replace(path)}
									variant="outline"
								>
									Cancel
								</Button>
							</DrawerFooter>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
}