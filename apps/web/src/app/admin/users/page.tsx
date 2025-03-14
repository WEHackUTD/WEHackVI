import { db, ilike, or, and, eq } from "db";
import { DataTable } from "@/components/admin/users/UserDataTable";
import { columns } from "@/components/admin/users/UserColumns";
import { Button } from "@/components/shadcn/ui/button";
import { FolderInput } from "lucide-react";
import { getAllUsers } from "db/functions";
import { userCommonData } from "db/schema";

// This begs a question where we might want to have an option later on to sort by the role as we might want different things
export default async function Page() {
	const userData = await getAllUsers();

	return (
		<div className="mx-auto max-w-7xl px-5 pt-20 pb-32">
			<div className="mb-5 grid w-full grid-cols-3">
				<div className="flex items-center">
					<div>
						<h2 className="text-3xl font-bold tracking-wide">
							Users
						</h2>
						<p className="text-sm text-muted-foreground">
							Total Users: {userData.length}
						</p>
					</div>
				</div>
				<div className="flex items-center justify-end">
					<a download href="/api/admin/export">
						<Button className="flex gap-x-1 bg-[#D09C51]">
							<FolderInput />
							Export
						</Button>
					</a>
				</div>
			</div>
			<div className="flex w-full justify-center">
				{userData && userData.length > 0 ? (
					<div className="w-full overflow-x-auto">
						<DataTable columns={columns} data={userData} />
					</div>
				) : (
					<div className="flex w-full items-center justify-center">
						<h1>No Results :(</h1>
					</div>
				)}
			</div>
		</div>
	);
}

export const runtime = "edge";
export const revalidate = 10;
