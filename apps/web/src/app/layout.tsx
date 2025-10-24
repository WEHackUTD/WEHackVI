import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { defaultTheme } from "config";
import { neobrutalism } from "@clerk/themes";
import Script from "next/script";
import { Inknut_Antiqua, Nunito, Junge, Julius_Sans_One, Righteous, Darker_Grotesque, Sriracha} from "next/font/google";
import type { Metadata } from "next";

const righteous = Righteous({
	subsets: ['latin'],
	variable: '--font-righteous',
	weight: '400'
  });
  
  const darker_grotesque = Darker_Grotesque({
	subsets: ['latin'],
	variable: '--font-darker-grotesque',
  });

export const metadata: Metadata = {
	title: "WEHack",
	description: "WEHack 25-26 Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = cookies().get("hk_theme")?.value || defaultTheme;
	return (
		<ClerkProvider>
			<html lang="en">
				<head>
					{/* google analytics tag */}
					<Script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-R5CQZPXHFV"
					></Script>
					<Script id="google analytics tag">
						{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-R5CQZPXHFV');

						`}
					</Script>
				</head>
				<body
					className={`${righteous.variable} ${darker_grotesque.variable}`}
				>
					{children}
					<Analytics />
				</body>
			</html>
		</ClerkProvider>
	);
}

export const runtime = "edge";
