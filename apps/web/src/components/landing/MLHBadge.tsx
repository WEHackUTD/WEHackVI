import Link from "next/link";
import Image from "next/image";

export default function MLHBadge() {
    return (
        <>
            {/* Dark Mode Badge Asset Container */}
            <div className="absolute z-50 hidden h-0 w-full dark:block">
                <Link
                    id="mlh-trust-badge"
                    className="absolute right-5 top-0 z-50 w-[10%] min-w-[60px] max-w-[80px]"
                    href="https://mlh.com/seasons/2027/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2027-season&utm_content=white"
                    target="_blank"
                >
                    <Image
                        src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-white.svg"
                        alt="Major League Hacking 2027 Hackathon Season"
                        width={0}
                        height={0}
                        className="aspect-auto h-auto w-full"
                        style={{ width: "100%" }}
                    />
                </Link>
            </div>
            
            {/* Light Mode Badge Asset Container */}
            <div className="absolute z-50 block h-0 w-full dark:hidden">
                <Link
                    id="mlh-trust-badge"
                    className="absolute right-5 top-0 z-50 w-[10%] min-w-[60px] max-w-[80px]"
                    href="https://mlh.com/seasons/2027/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2027-season&utm_content=white"
                    target="_blank"
                >
                    <Image
                        src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-white.svg"
                        alt="Major League Hacking 2027 Hackathon Season"
                        width={0}
                        height={0}
                        className="aspect-auto h-auto w-full"
                        style={{ width: "100%" }}
                    />
                </Link>
            </div>
        </>
    );
}