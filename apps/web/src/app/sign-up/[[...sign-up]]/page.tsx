import { SignUp } from "@clerk/nextjs";
import { Redis } from "@upstash/redis";
import { parseRedisBoolean } from "@/lib/utils/server/redis";
import c from "config";
import { Button } from "@/components/shadcn/ui/button";
import Link from "next/link";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function Page() {
	const [defaultRegistrationEnabled, defaultSecretRegistrationEnabled]: (
		| string
		| null
	)[] = await redis.mget(
		`${process.env.HK_ENV}_config:registration:registrationEnabled`,
		`${process.env.HK_ENV}_config:registration:secretRegistrationEnabled`,
	);

	if (parseRedisBoolean(defaultRegistrationEnabled, true) === true) {
		return (
			<main className="flex min-h-screen items-center justify-center">
				<SignUp
					afterSignUpUrl={"/register"}
					afterSignInUrl={"/dash/"}
				/>
			</main>
		);
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-2">
			<div className="max-w-screen fixed left-1/2 top-[calc(50%+7rem)] h-[40vh] w-[800px] -translate-x-1/2 -translate-y-1/2 scale-150 overflow-x-hidden bg-background opacity-30 blur-[100px] will-change-transform" />
			<h2 className="text-4xl font-extrabold">{c.hackathonName}</h2>
			<h1 className="mb-10 pb-5 text-5xl font-extrabold text-hackathon  md:text-8xl">
				Registration
			</h1>
			<div className="relative z-10 flex aspect-video w-full max-w-[550px] flex-col items-center justify-center gap-y-4 rounded-xl bg-white px-5 py-10 backdrop-blur transition dark:bg-white/[0.08]">
				<h2 className="w-full text-center text-2xl font-black text-background">
					Registration is Currently Closed
				</h2>
				<p className="text-center text-xl font-bold text-background">
					Our registration is closed. However, we still encourage you to show up for walk-ins!
					If you have any questions or concerns, feel free to reach out to us at {c.issueEmail}!
				</p>

				<Link href={"/"} className="pb-10">
					<Button className="bg-[#D09C51] hover:bg-[#CCBA97]">Return Home</Button>
				</Link>
				<p className="absolute bottom-0 pb-5 text-center text-lg">
					Already registered?{" "}
					<Link className="pl-2 underline" href={"/sign-in"}>
						Sign-in.
					</Link>
				</p>
			</div>
		</main>
	);
}

export const runtime = "edge";
