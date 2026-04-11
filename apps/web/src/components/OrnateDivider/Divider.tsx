import React from "react";

export default function DividerFlourish({
  color = "#C9A96A",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        marginTop: "18px",
      }}
    >
      <svg
        viewBox="0 0 1400 100"
        role="presentation"
        focusable="false"
        style={{
          width: "60vw",
          maxWidth: "1100px",
          height: "40px",
          overflow: "visible",
          display: "block",
          filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.35))",
        }}
      >
        <path d="M40 50 H500" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
        <path d="M900 50 H1360" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />

        <path d="M120 50 H535" stroke={color} strokeWidth="2.1" strokeLinecap="round" opacity="0.75" />
        <path d="M865 50 H1280" stroke={color} strokeWidth="2.1" strokeLinecap="round" opacity="0.75" />

        <g opacity="0.8">
          <path d="M105 50 l10 -10 l10 10 l-10 10 Z" fill="none" stroke={color} strokeWidth="1.8" />
          <path d="M1295 50 l-10 -10 l-10 10 l10 10 Z" fill="none" stroke={color} strokeWidth="1.8" />
        </g>

        <g transform="translate(700 0)">
          <path
            d="M0 50
               C-34 28, -92 24, -142 36
               C-184 46, -240 66, -300 66
               C-330 66, -344 54, -334 42
               C-324 32, -300 34, -292 44"
            fill="none"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.92"
          />
          <g transform="scale(-1,1)">
            <path
              d="M0 50
                 C-34 28, -92 24, -142 36
                 C-184 46, -240 66, -300 66
                 C-330 66, -344 54, -334 42
                 C-324 32, -300 34, -292 44"
              fill="none"
              stroke={color}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.92"
            />
          </g>

          <path
            d="M0 50
               C-24 38, -54 36, -82 44
               C-96 48, -108 58, -106 66
               C-104 74, -90 76, -78 68
               C-66 60, -68 50, -82 48"
            fill="none"
            stroke={color}
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g transform="scale(-1,1)">
            <path
              d="M0 50
                 C-24 38, -54 36, -82 44
                 C-96 48, -108 58, -106 66
                 C-104 74, -90 76, -78 68
                 C-66 60, -68 50, -82 48"
              fill="none"
              stroke={color}
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          <g opacity="0.98">
            <path
              d="M0 20
                 C-8 24, -18 34, -24 44
                 C-18 42, -9 41, 0 41
                 C9 41, 18 42, 24 44
                 C18 34, 8 24, 0 20 Z"
              fill="none"
              stroke={color}
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path d="M0 24 V50" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M-9 28 C-10 35, -10 42, -8 50" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" />
            <path d="M9 28 C10 35, 10 42, 8 50" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" />
          </g>

          <path d="M-30 58 C-42 68, -34 80, -18 72" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M30 58 C42 68, 34 80, 18 72" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M0 50 l8 8 l-8 8 l-8 -8 Z" fill="none" stroke={color} strokeWidth="1.8" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}