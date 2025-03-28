import { Suspense } from "react";
import UserScheduleView from "@/components/schedule/UserScheduleView";
import ScheduleTimeline from "./schedule-timeline";
import Loading from "@/components/shared/Loading";
import { getAllEvents } from "db/functions";
import { headers } from "next/headers";
import { VERCEL_IP_TIMEZONE_HEADER_KEY } from "@/lib/constants";
import { getClientTimeZone } from "@/lib/utils/client/shared";
export default async function Page() {
	const sched = await getAllEvents();
	const userTimeZoneHeaderKey = headers().get(VERCEL_IP_TIMEZONE_HEADER_KEY);
	const userTimeZone = getClientTimeZone(userTimeZoneHeaderKey);
	return (
		<div className="pb-20">
			<div className="flex flex-col gap-y-2">
				<h1 className="mx-auto mt-20 w-3/4 text-4xl md:text-6xl font-black">Schedule</h1>
				<h3 className="mx-auto w-3/4 text-lg md:text-lg font-light">Click on the event title for more information</h3>
			</div>
			
			<Suspense fallback={<Loading />}>
				{/* <UserScheduleView /> */}
				<ScheduleTimeline schedule={sched} timezone={userTimeZone} />
			</Suspense>
		</div>
	);
}

export const runtime = "edge";
export const revalidate = 60;
