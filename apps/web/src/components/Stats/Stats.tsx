// apps/web/src/components/Stats/Stats.tsx
// Server component: no hooks, no client-side state
import './Stats.css';

// served from public/static/images to avoid 404s on /static paths
const CAT_SCULPTURE = '/static/images/Cat_Sculpture.png';
const CAT_EYES_OPEN = '/static/images/Cat_Eyes_Open.png';
const CAT_EYES_CLOSED = '/static/images/Cat_Eyes_Closed.png';
const TICKET = '/static/images/Group 79.webp';

function Statistics() {
  return (
    <div
      className="Statistics-container w-full h-auto flex flex-col items-center justify-center p-6 pb-40 lg:pb-60 relative overflow-visible"
      id="Statistics"
    >
      <img src={CAT_SCULPTURE} alt="Cat Sculpture" className="corner-cat corner-cat-top-right" />

      {/* Blink handled in CSS sprite; no JS re-render */}
      <div className="corner-cat corner-cat-bottom-left eyes-sprite" aria-hidden>
        <img src={CAT_EYES_OPEN} className="eyes-frame eyes-open" alt="" />
        <img src={CAT_EYES_CLOSED} className="eyes-frame eyes-closed" alt="" />
      </div>

      <div className="stats-image-container flex flex-col items-center justify-center relative">
        <img
          src={TICKET}
          alt="Statistics Graphic"
          className="rotating-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default Statistics;
