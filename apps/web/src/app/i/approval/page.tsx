import c from "config";
import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";

export default function Page() {
	return (
		<main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center bg-background px-4 py-4 sm:px-6">
			<div className="max-w-screen fixed left-1/2 top-[calc(50%+7rem)] h-[40vh] w-[800px]"></div>
			<h1 className="mb-10 text-2xl font-extrabold text-hackathon dark:bg-gradient-to-t dark:from-hackathon/80 dark:to-white dark:bg-clip-text dark:text-transparent sm:text-6xl md:text-8xl">
				{c.hackathonName}
			</h1>
			<div className="relative flex aspect-video w-full max-w-[500px] flex-col items-center justify-center rounded-xl bg-white p-9 backdrop-blur transition dark:bg-white/[0.08]">
				<h2 className="text-center text-xl font-bold text-[#07005F] font-gantari sm:text-2xl">
					{/* <CheckCircleIcon /> */}
					Thank you for submitting your application for WEHack 2026!
				</h2>
				<p className="pb-10 pt-5 text-center text-[#07005F] text-lg font-bold sm:text-xl">
					Your registration has been submitted, and we will reach a decision on your registration status soon.
					<br />
					You will be notified when it is approved!
				</p>
				<Link href={"/"}>
					<Button className="bg-[#D4903B] hover:bg-[#FFCB86]">
						Go Home
					</Button>
				</Link>
			</div>
		</main>
	);
}

export const runtime = "edge";
