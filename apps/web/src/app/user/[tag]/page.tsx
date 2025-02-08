import { notFound } from "next/navigation";
import Image from "next/image";
import RoleBadge from "@/components/dash/shared/RoleBadge";
import { Balancer } from "react-wrap-balancer";
import Link from "next/link";
import { Github, Linkedin, Globe } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import { getHackerByTag } from "db/functions";
import DashLayout from "@/app/dash/layout";
import NavbarNonDash from "@/components/shared/NavbarNonDash";

export default async function ({ params }: { params: { tag: string } }) {
	if (!params.tag || params.tag.length <= 1) return notFound();

	const user = await getHackerByTag(params.tag, false);
	if (!user) return notFound();

	return (
		<>
			<NavbarNonDash title={"Profile"} />
			<div className="max-w-screen relative flex min-h-screen items-center justify-center bg-nav">
				<div className="absolute top-0 h-[50vh] w-[60vw] -translate-y-[22vh]" />
				<div className="grid min-h-[45vh] w-full max-w-5xl flex-col justify-center md:grid-cols-5 md:justify-start md:gap-x-2 md:pl-11">
					<div className="flex flex-col justify-center">
						<div className="relative aspect-square w-full overflow-hidden rounded-full">
							<Image
								fill
								src={user.profilePhoto}
								alt={`@${user.hackerTag}'s Profile Photo`}
								className="object-cover"
							/>
						</div>
						<h1 className="mt-2 md:mt-7 text-2xl font-bold">
							{user.firstName} {user.lastName}
						</h1>
						<div className="mt-1 flex items-center gap-x-2">
							<h2 className="font-mono text-lg text-muted-foreground">
								@{user.hackerTag}
							</h2>
							<RoleBadge role={user.role} />
						</div>
						{user.hackerData.GitHub &&
							user.hackerData.GitHub.length > 0 && (
								<Link
									href={
										"https://github.com/" +
										user.hackerData.GitHub
									}
									className="mt-10 flex items-center gap-x-2 leading-none hover:underline"
								>
									<Github className="text-xl" />
									{user.hackerData.GitHub}
								</Link>
							)}
						{user.hackerData.LinkedIn &&
							user.hackerData.LinkedIn.length > 0 && (
								<Link
									href={
										"https://linkedin.com/in/" +
										user.hackerData.LinkedIn
									}
									className="mt-3 flex items-center gap-x-2 leading-none hover:underline"
								>
									<Linkedin className="text-xl" />
									{user.hackerData.LinkedIn}
								</Link>
							)}
						{user.hackerData.PersonalWebsite &&
							user.hackerData.PersonalWebsite.length > 0 && (
								<Link
									href={
										user.hackerData.PersonalWebsite.startsWith(
											"http",
										) ||
										user.hackerData.PersonalWebsite.startsWith(
											"https",
										)
											? user.hackerData.PersonalWebsite
											: "https://" +
												user.hackerData.PersonalWebsite
									}
									className="mt-3 flex items-center gap-x-2 leading-none hover:underline"
								>
									<Globe className="text-xl" />
									{user.hackerData.PersonalWebsite.replace(
										"https://",
										"",
									).replace("http://", "")}
								</Link>
							)}
					</div>
					<div className="col-span-4 mt-5 flex flex-col justify-center md:ml-32">
						<h3 className="font-bold text-2xl">About</h3>
						<p className="text-xl font-medium">
							<Balancer>{user.bio}</Balancer>
						</p>
						{user.skills && (user.skills as string[]).length > 0 ? (
							<>
								<h3 className="mt-4 font-bold text-2xl">
									Skills
								</h3>
								<p className="text-xl font-medium">{(user.skills as string[]).join(", ")}</p>
							</>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
}

export const runtime = "edge";
