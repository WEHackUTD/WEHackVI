import { getAllNavItems } from "@/lib/utils/server/redis";
import {
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/shadcn/ui/dropdown-menu";
import Link from "next/link";
import NavBarLinksGrouper from "./NavBarLinksGrouper";

export default async function MobileNavBarLinks() {
	const navLinks = await getAllNavItems();

	return (
		<div className="cursor-pointer lg:hidden">
			{/* {navLinks.items.map((nav, key) => {
				return (
					<div key={nav.name}>
						{nav.enabled ? (
							<Link href={nav.url}>
								<DropdownMenuItem>{nav.name}</DropdownMenuItem>
							</Link>
						) : null}
					</div>
				);
			})} */}
			<DropdownMenuSeparator></DropdownMenuSeparator>
			<DropdownMenuItem className="cursor-pointer">
							<Link href={`/#about-wehack`} className="w-full h-full block">
								About
							</Link>
						</DropdownMenuItem>

						<DropdownMenuItem className="cursor-pointer">
							<Link href={`/#Testimonials`} className="w-full h-full block">
								Testimonials
							</Link>
						</DropdownMenuItem>

						<DropdownMenuItem className="cursor-pointer">
							<Link href={`/#Sponsors`} className="w-full h-full block">
								Sponsors
							</Link>
						</DropdownMenuItem>

						<DropdownMenuItem className="cursor-pointer">
							<Link href={`/#FAQ`} className="w-full h-full block">
								FAQ
							</Link>
						</DropdownMenuItem>

						{/* <DropdownMenuItem className="cursor-pointer">
							<Link href={`/#Team`} className="w-full h-full block">
								Meet the Team
							</Link>
						</DropdownMenuItem> */}
						
						<Link href={`http://hackp.ac/coc`} target="_blank">
							<DropdownMenuItem className="cursor-pointer">
								MLH Conduct
							</DropdownMenuItem>
						</Link>
			
			
		</div>
	);
}

export const runtime = "edge";
export const revalidate = 30;
