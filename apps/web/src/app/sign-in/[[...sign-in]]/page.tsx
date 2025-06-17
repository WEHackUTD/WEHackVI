// Code below is what we had for WEHack 2025

import { SignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
	return redirect("/");
	// (
	// 	<div className="flex min-h-screen items-center justify-center">
	// 		<SignIn afterSignUpUrl={"/register"} afterSignInUrl={"/dash/"} />
	// 	</div>
	// );
}

export const runtime = "edge";
