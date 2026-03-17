"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import NextImage, { StaticImageData } from "next/image";
import "./Team.css";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string | StaticImageData;
}

// ✅ Static imports ONLY for first page (fast load)
import member1 from "../../../../public/img/static/images/team/member_1.webp";
import member2 from "../../../../public/img/static/images/team/member_2.webp";
import member3 from "../../../../public/img/static/images/team/member_3.webp";
import member4 from "../../../../public/img/static/images/team/member_4.webp";
import member5 from "../../../../public/img/static/images/team/member_5.webp";
import member6 from "../../../../public/img/static/images/team/member_6.webp";
import member7 from "../../../../public/img/static/images/team/member_7.webp";
import member8 from "../../../../public/img/static/images/team/member_8.webp";

const STATIC_FIRST_PAGE: Record<number, StaticImageData> = {
  1: member1,
  2: member2,
  3: member3,
  4: member4,
  5: member5,
  6: member6,
  7: member7,
  8: member8,
};

// ✅ All members
const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: "Oviya Selvakumar", title: "Co-Director" },
  { id: 2, name: "Elisa Paul", title: "Co-Director" },
  { id: 3, name: "Clowie Garcia", title: "Advisor" },
  { id: 4, name: "Zubiya Syeda", title: "Development Director" },
  { id: 5, name: "Sanvi Gudipati", title: "Development Coordinator" },
  { id: 6, name: "Annie Li", title: "Development Coordinator" },
  { id: 7, name: "Sameeraa Kandalgaonkar", title: "Development Coordinator" },
  { id: 8, name: "Kanchan Javalkar", title: "Development Coordinator" },
  { id: 9, name: "Faith Omoye", title: "Marketing Director" },
  { id: 10, name: "Taylor Beers", title: "Marketing Coordinator" },
  { id: 11, name: "Sri Sahasra Danthuluri", title: "Marketing Coordinator" },
  { id: 12, name: "Meghana Kakani", title: "Marketing Coordinator" },
  { id: 13, name: "Daisy Gan", title: "Marketing Coordinator" },
  { id: 14, name: "Toby Estipona", title: "Experience Director" },
  { id: 15, name: "Oluwawemimo Jayeoba", title: "Experience Coordinator" },
  { id: 16, name: "Aaryaa Moharir", title: "Experience Coordinator" },
  { id: 17, name: "Sanjanaa Tiwari", title: "Experience Coordinator" },
  { id: 18, name: "Ditya Jain", title: "Experience Coordinator" },
  { id: 19, name: "Sanjana Kotha", title: "Industry Director" },
  { id: 20, name: "Maryam Tariq", title: "Industry Coordinator" },
  { id: 21, name: "Mia Sorola Yoshida", title: "Industry Coordinator" },
  { id: 22, name: "Neeharika Dasaraju", title: "Industry Coordinator" },
  { id: 23, name: "Dharshini Mahesh", title: "Industry Coordinator" },
  { id: 24, name: "Nivedha Sreenivasan", title: "Logistics Director" },
  { id: 25, name: "Zainab Syeda", title: "Logistics Coordinator" },
  { id: 26, name: "Farah Khalil", title: "Logistics Coordinator" },
  { id: 27, name: "Anusha Rab", title: "Logistics Coordinator" },
  { id: 28, name: "Purva Patel", title: "Logistics Coordinator" },
].map((m) => ({
  ...m,
  image: `/img/static/images/team/member_${m.id}.webp`,
}));

const ITEMS_PER_PAGE = 8;

// ✅ Pre-split pages
const PAGED_MEMBERS: TeamMember[][] = Array.from(
  { length: Math.ceil(TEAM_MEMBERS.length / ITEMS_PER_PAGE) },
  (_, page) =>
    TEAM_MEMBERS.slice(
      page * ITEMS_PER_PAGE,
      (page + 1) * ITEMS_PER_PAGE
    )
);

const imageSizes =
  "(max-width: 600px) 42vw, (max-width: 1200px) 24vw, 18vw";

// ✅ Card component
const TeamMemberCard = React.memo<{
  member: TeamMember;
  priority: boolean;
}>(({ member, priority }) => {
  const isStatic = !!STATIC_FIRST_PAGE[member.id];

  return (
    <div className="frame-wrapper">
      <div className="ornate-frame">
        <NextImage
          src={STATIC_FIRST_PAGE[member.id] ?? member.image}
          alt={member.name}
          className="member-image"
          width={640}
          height={640}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes={imageSizes}
          placeholder={isStatic ? "blur" : "empty"}
        />
      </div>

      <div className="member-info">
        <p className="member-name">{member.name}</p>
        <p className="member-title">{member.title}</p>
      </div>
    </div>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

// ✅ Main gallery
const ImageGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = PAGED_MEMBERS.length;

  const isFirstPage = currentPage === 0;

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) =>
      (prev - 1 + totalPages) % totalPages
    );
  }, [totalPages]);

  const currentMembers = useMemo(
    () => PAGED_MEMBERS[currentPage],
    [currentPage]
  );

  // ✅ Proper preload of next page
  useEffect(() => {
    const nextPage = (currentPage + 1) % totalPages;

    PAGED_MEMBERS[nextPage]?.forEach((member) => {
      const href =
        typeof member.image === "string"
          ? member.image
          : member.image.src;

      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;

      document.head.appendChild(link);
    });
  }, [currentPage, totalPages]);

  return (
    <div className="grid-container">
      <div className="gallery-content">
        <div className="team-header">
          <img
            src="/img/static/images/team/meet_the_team.png"
            alt="Team"
            className="team-header-image"
            loading="eager"
          />
        </div>

        <div className="frames-grid">
          {currentMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              priority={isFirstPage}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <>
            <button
              className="nav-arrow nav-arrow-left"
              onClick={handlePrev}
              aria-label="Previous page"
              disabled={currentPage === 0}
            >
              ◀
            </button>

            <button
              className="nav-arrow nav-arrow-right"
              onClick={handleNext}
              aria-label="Next page"
              disabled={currentPage === totalPages - 1}
            >
              ▶
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;