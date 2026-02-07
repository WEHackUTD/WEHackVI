import c from "config";
import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";

export default function Page() {
	return (
		<main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center bg-background px-4 py-10 sm:px-6">
			<div className="fixed left-1/2 top-[calc(50%+7rem)] hidden h-[40vh] w-[800px] max-w-screen sm:block" />
			<h1 className="mb-8 text-center text-3xl font-extrabold text-hackathon dark:bg-gradient-to-t dark:from-hackathon/80 dark:to-white dark:bg-clip-text dark:text-transparent sm:mb-10 sm:text-6xl md:text-8xl">
				{c.hackathonName}
			</h1>
			<div className="relative flex w-full max-w-[520px] flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 text-center shadow-md backdrop-blur transition dark:bg-white/[0.08] sm:gap-5 sm:p-9">
				<h2 className="text-lg font-bold font-gantari text-[#07005F] sm:text-2xl">
					{/* <CheckCircleIcon /> */}
					Thank you for submitting your application for WEHack 2026!
				</h2>
				<p className="text-balance text-base font-medium text-[#07005F] sm:text-lg">
					Your registration has been submitted. We will review it soon and notify you when it is approved.
				</p>
				<Link href={"/"}>
					<Button className="w-full bg-[#D4903B] hover:bg-[#FFCB86] sm:w-auto">
						Go Home
					</Button>
				</Link>
			</div>
		</main>
	);
}

export const runtime = "edge";
