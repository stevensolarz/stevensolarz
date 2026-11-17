export default function Sticker({ text }) {
  return (
    <span className="sticker" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path id="ring" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="#ffe600" stroke="#07060b" strokeWidth="4" />
        <text>
          <textPath href="#ring">{text}</textPath>
        </text>
        <path
          d="M100 62 L109 91 L139 91 L115 109 L124 138 L100 120 L76 138 L85 109 L61 91 L91 91 Z"
          fill="#ff2bd6"
          stroke="#07060b"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
