"use client";
import React, { useState, useCallback } from 'react';
import './Team.css';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

// const TEAM_MEMBERS: TeamMember[] = Array.from({ length: 26 }, (_, i) => ({
//   id: i + 1,
//   name: `Team Member ${i + 1}`,
//   title: 'Position Title',
//   // image: 'static/images/cat_with_frame.png',
//   image: `static/images/member_${i + 1}.webp`,
// }));

const TEAM_MEMBERS: TeamMember[] = [
  { id: 1,  name: 'Oviya Selvakumar', title: 'Co-Director' },
  { id: 2,  name: 'Elisa Paul',      title: 'Co-Director' },
  { id: 3,  name: 'Clowie Garcia', title: 'Advisor' },
  { id: 4,  name: 'Zubiya Syeda',     title: 'Development Director' },
  { id: 5,  name: 'Sanvi Gudipati', title: 'Development Coordinator' },
  { id: 6,  name: 'Annie Li',  title: 'Development Coordinator' },
  { id: 7,  name: 'Sameeraa Kandalgaonkar',   title: 'Development Coordinator' },
  { id: 8,  name: 'Kanchan Javalkar',      title: 'Development Coordinator' },
  { id: 9,  name: 'Faith Omoye',   title: 'Marketing Director' },
  { id: 10, name: 'Taylor Beers', title: 'Marketing Coordinator' },
  { id: 11, name: 'Sai Sahasra Danthuluri',  title: 'Marketing Coordinator' },
  { id: 12, name: 'Meghana Kakani',   title: 'Marketing Coordinator' },
  { id: 13, name: 'Daisy Gan',   title: 'Marketing Coordinator' },
  { id: 14, name: 'Toby Estipona',     title: 'Experience Director' },
  { id: 15, name: 'Oluwawemimo Jayeoba', title: 'Experience Coordinator' },
  { id: 16, name: 'Aaryaa Moharir', title: 'Experience Coordinator' },
  { id: 17, name: 'Sanjanaa Tiwari',    title: 'Experience Coordinator' },
  { id: 18, name: 'Ditya Jain',    title: 'Experience Coordinator' },
  { id: 19, name: 'Sanjana Kotha',  title: 'Industry Director' },
  { id: 20, name: 'Maryam Tariq',     title: 'Industry Coordinator' },
  { id: 21, name: 'Mia Sorola Yoshida',      title: 'Industry Coordinator' },
  { id: 22, name: 'Neeharika Dasaraju',  title: 'Industry Coordinator' },
  { id: 23, name: 'Dharshini Mahesh',   title: 'Industry Coordinator' },
  { id: 24, name: 'Nivedha Sreenivasan ', title: 'Logistics Director' },
  { id: 25, name: 'Zainab Syeda',   title: 'Logistics Coordinator' },
  { id: 26, name: 'Farah Khalil', title: 'Logistics Coordinator' },
  { id: 27, name: 'Anusha Rab',   title: 'Logistics Coordinator' },
  { id: 28, name: 'Purva Patel',   title: 'Logistics Coordinator' },

].map((m) => ({ ...m, image: `/img/static/images/team/member_${m.id}.webp` }));

const ITEMS_PER_PAGE = 8;

const TeamMemberCard: React.FC<{ member: TeamMember; priority: boolean }> = ({ member, priority }) => (
  <div className="frame-wrapper">
    <div className="ornate-frame">
      <img
        src={member.image}
        alt={member.name}
        className="member-image"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
    <div className="member-info">
      <p className="member-name">{member.name}</p>
      <p className="member-title">{member.title}</p>
    </div>
  </div>
);

const ImageGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(TEAM_MEMBERS.length / ITEMS_PER_PAGE);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const currentMembers = TEAM_MEMBERS.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  // Preload next page images
  const nextPageStart = ((currentPage + 1) % totalPages) * ITEMS_PER_PAGE;
  const nextPageMembers = TEAM_MEMBERS.slice(nextPageStart, nextPageStart + ITEMS_PER_PAGE);

  return (
    <section id="ImageGallery" className="grid-container">
      {/* Preload next page images in background */}
      <div style={{ display: 'none' }} aria-hidden="true">
        {nextPageMembers.map((member) => (
          <img key={member.id} src={member.image} alt="" decoding="async" />
        ))}
      </div>

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
          {currentMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              priority={currentPage === 0 && index < 4}
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
              <svg width="30" height="50" viewBox="0 0 30 50">
                <path d="M25 5 L5 25 L25 45" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="nav-arrow nav-arrow-right"
              onClick={handleNext}
              aria-label="Next page"
              disabled={currentPage === totalPages - 1}
            >
              <svg width="30" height="50" viewBox="0 0 30 50">
                <path d="M5 5 L25 25 L5 45" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
