import c from "config";
import Navbar from "@/components/shared/Navbar";
import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";
import Image from "next/image";
import React from "react";

export default function Page() {
    return (
        <>
            {/* Top Navigation Brand Logo Bar */}
            <div className="z-50 w-screen pt-6">
                <div className="relative top-0 z-50 h-16 w-screen">
                    <div className="mx-auto grid h-full w-full max-w-7xl grid-flow-col grid-cols-2 px-2 sm:px-6 lg:max-w-full lg:px-8">
                        <div className="col-span-3 flex items-center justify-start gap-x-5 pl-4 md:pl-0">
                            <Link
                                href={"/"}
                                className="mr-5 flex items-center gap-x-2"
                            >
                                <Image
                                    src={"/img/static/images/white wehack logo.png"}
                                    alt={c.hackathonName + " Logo"}
                                    width={60}
                                    height={60}
                                    className={"drop-shadow-[0_0px_0px_rgba(255,255,255,0.90)]"}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Center-Aligned 2027 Season Notice Layout */}
            <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
                <div className="relative z-10 flex w-full max-w-2xl flex-col items-center justify-center gap-y-6 rounded-2xl border border-[#D09C51] bg-[#1e1e1e] p-8 md:p-12 shadow-2xl">
                    
                    {/* Header Title */}
                    <h1 className="text-4xl font-black text-hackathon md:text-6xl font-cinzel-decorative tracking-wide text-[#FFE9D7]">
                        WEHack 2027
                    </h1>

                    {/* Styled Separator line matching brand guidelines */}
                    <div className="h-[2px] w-24 bg-[#D09C51] my-1" />
                    
                    {/* Required Structural Update Copy */}
                    <p className="text-lg md:text-xl font-light leading-relaxed text-[#C9D5E3]">
                        More information about WEHack 2027 will come out soon. In the meantime, 
                        fill out our interest form to get updates from us.
                    </p>

                    {/* Live MLH Registration Interest Form Link Button Action */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                        <Link 
                            href="https://events.mlh.com/events/14391-wehack-2027" 
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button className="px-8 py-6 text-lg font-bold text-[#1a1a1a] bg-[#D09C51] hover:bg-[#CCBA97] transition-all duration-200 transform hover:scale-[1.02] rounded-xl shadow-lg">
                                Fill out the Interest Form!
                            </Button>
                        </Link>

                        <Link href={"/"}>
                            <Button variant="outline" className="px-8 py-6 text-lg border-white/10 hover:bg-white/5 text-[#C9D5E3] rounded-xl">
                                Return Home
                            </Button>
                        </Link>
                    </div>

                    {/* Operational Support Contact Point footer */}
                    <p className="text-sm text-[#C9D5E3]/60 mt-4">
                        Running into an issue? Reach out to us at <b>wehackutd@gmail.com</b>
                    </p>
                </div>
            </main>
        </>
    );
}

export const runtime = "edge";