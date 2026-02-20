// apps/web/src/components/Stats/Stats.tsx
// Server component: no hooks, no client-side state
import './Stats.css';

const CAT_SCULPTURE_PNG = '/img/static/images/Cat_Sculpture.png';
const CAT_SCULPTURE_WEBP_1X = '/img/static/images/Cat_Sculpture@1x.webp';
const CAT_SCULPTURE_WEBP_2X = '/img/static/images/Cat_Sculpture@2x.webp';
const CAT_EYES_OPEN_PNG = '/img/static/images/Cat_Eyes_Open.png';
const CAT_EYES_OPEN_WEBP_1X = '/img/static/images/Cat_Eyes_Open@1x.webp';
const CAT_EYES_OPEN_WEBP_2X = '/img/static/images/Cat_Eyes_Open@2x.webp';
const CAT_EYES_CLOSED_PNG = '/img/static/images/Cat_Eyes_Closed.png';
const CAT_EYES_CLOSED_WEBP_1X = '/img/static/images/Cat_Eyes_Closed@1x.webp';
const CAT_EYES_CLOSED_WEBP_2X = '/img/static/images/Cat_Eyes_Closed@2x.webp';
const TICKET = '/img/static/images/Group 79.webp';

function Statistics() {
  return (
    <div
      className="Statistics-container w-full h-auto flex flex-col items-center justify-center p-6 pb-40 lg:pb-60 relative overflow-visible"
      id="Statistics"
    >
      <picture className="corner-cat corner-cat-top-right">
        <source
          srcSet={`${CAT_SCULPTURE_WEBP_1X} 1x, ${CAT_SCULPTURE_WEBP_2X} 2x`}
          type="image/webp"
        />
        <img
          src={CAT_SCULPTURE_PNG}
          alt="Cat Sculpture"
          width={190}
          height={173}
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* Blink handled in CSS sprite; no JS re-render */}
      <div className="corner-cat corner-cat-bottom-left eyes-sprite" aria-hidden>
        <picture className="eyes-frame eyes-open">
          <source
            srcSet={`${CAT_EYES_OPEN_WEBP_1X} 1x, ${CAT_EYES_OPEN_WEBP_2X} 2x`}
            type="image/webp"
          />
          <img src={CAT_EYES_OPEN_PNG} alt="" loading="lazy" width={190} height={93} />
        </picture>
        <picture className="eyes-frame eyes-closed">
          <source
            srcSet={`${CAT_EYES_CLOSED_WEBP_1X} 1x, ${CAT_EYES_CLOSED_WEBP_2X} 2x`}
            type="image/webp"
          />
          <img src={CAT_EYES_CLOSED_PNG} alt="" loading="lazy" width={190} height={93} />
        </picture>
      </div>

      <div className="stats-image-container flex flex-col items-center justify-center relative">
        <img
          src={TICKET}
          alt="Statistics Graphic"
          className="rotating-image"
          loading="lazy"
          decoding="async"
          width={900}
          height={533}
        />
      </div>
    </div>
  );
}

export default Statistics;
