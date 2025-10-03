// Code below is what we had for WEHack 2025

import { SignIn } from "@clerk/nextjs";

export default async function Page() {
	// return redirect("/");
	return (
		<div className="flex min-h-screen items-center justify-center">
			<SignIn afterSignUpUrl={"/register"} afterSignInUrl={"/dash/"} />
		</div>
	);
}

export const runtime = "edge";
