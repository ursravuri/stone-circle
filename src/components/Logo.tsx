export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lCopperAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C49A6C" />
          <stop offset="50%" stopColor="#D4AA7C" />
          <stop offset="100%" stopColor="#B48A5C" />
        </linearGradient>
        <linearGradient id="lStoneDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        <linearGradient id="lStoneMedium" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#787878" />
          <stop offset="100%" stopColor="#6E6E6E" />
        </linearGradient>
        <linearGradient id="lStoneGrey" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6E6E6E" />
          <stop offset="100%" stopColor="#5A5A5A" />
        </linearGradient>
        <linearGradient id="lEarthGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5A8C69" />
          <stop offset="100%" stopColor="#4A7C59" />
        </linearGradient>
      </defs>
      <g transform="translate(150, 150)">
        <path d="M-14,-114 L-10,-117 L6,-115 L17,-112 L19,-106 L16,-98 L10,-96 L-6,-97 L-17,-101 L-18,-108 Z" fill="url(#lStoneDark)" opacity="0.95" />
        <path d="M26,-108 L34,-110 L46,-103 L53,-94 L50,-86 L43,-82 L34,-84 L24,-90 L22,-100 Z" fill="url(#lStoneGrey)" />
        <path d="M60,-82 L67,-86 L79,-74 L86,-62 L84,-53 L76,-48 L66,-53 L58,-62 L55,-73 Z" fill="url(#lStoneDark)" opacity="0.9" />
        <path d="M90,-41 L96,-46 L106,-34 L112,-19 L109,-10 L101,-5 L91,-11 L86,-24 L85,-34 Z" fill="url(#lEarthGreen)" />
        <path d="M110,2 L115,7 L113,24 L106,38 L96,43 L89,36 L91,22 L98,10 L106,-2 Z" fill="url(#lStoneMedium)" />
        <path d="M94,50 L98,58 L91,74 L82,86 L70,89 L62,82 L67,67 L77,55 L86,48 Z" fill="url(#lStoneDark)" opacity="0.95" />
        <path d="M58,94 L62,101 L50,110 L34,115 L22,112 L19,103 L26,94 L41,89 L53,89 Z" fill="url(#lCopperAccent)" />
        <path d="M12,113 L5,115 L-12,110 L-26,101 L-29,91 L-22,84 L-10,89 L2,98 L10,108 Z" fill="url(#lStoneGrey)" />
        <path d="M-36,86 L-43,91 L-60,82 L-70,67 L-67,58 L-58,53 L-48,60 L-41,74 L-36,82 Z" fill="url(#lStoneDark)" opacity="0.9" />
        <path d="M-72,46 L-79,41 L-86,24 L-89,7 L-84,-2 L-74,-5 L-70,10 L-67,26 L-70,38 Z" fill="url(#lEarthGreen)" />
        <path d="M-82,-14 L-86,-22 L-84,-41 L-77,-55 L-67,-60 L-60,-53 L-62,-38 L-70,-24 L-77,-14 Z" fill="url(#lStoneMedium)" />
        <path d="M-58,-67 L-62,-74 L-53,-89 L-38,-98 L-26,-98 L-22,-91 L-29,-79 L-41,-70 L-53,-65 Z" fill="url(#lStoneDark)" opacity="0.95" />
        <g opacity="0.7">
          <circle cx="0" cy="-4" r="2.8" fill="#C49A6C" />
          <circle cx="6" cy="-10" r="2.5" fill="#C49A6C" opacity="0.9" />
          <circle cx="15" cy="-13" r="2.3" fill="#C49A6C" opacity="0.85" />
          <circle cx="24" cy="-12" r="2.1" fill="#C49A6C" opacity="0.8" />
          <circle cx="31" cy="-6" r="1.9" fill="#C49A6C" opacity="0.7" />
          <circle cx="36" cy="4" r="1.7" fill="#C49A6C" opacity="0.6" />
          <circle cx="36" cy="14" r="1.6" fill="#C49A6C" opacity="0.5" />
          <circle cx="-5" cy="5" r="2.2" fill="#4A7C59" />
          <circle cx="-12" cy="10" r="2.0" fill="#4A7C59" opacity="0.9" />
          <circle cx="-20" cy="11" r="1.8" fill="#4A7C59" opacity="0.8" />
          <circle cx="-28" cy="7" r="1.6" fill="#4A7C59" opacity="0.6" />
          <circle cx="-32" cy="0" r="1.5" fill="#4A7C59" opacity="0.5" />
          <circle cx="-1" cy="0" r="1.8" fill="#6E6E6E" opacity="0.6" />
          <circle cx="2" cy="-1" r="1.5" fill="#1A1A1A" opacity="0.5" />
          <circle cx="-2" cy="2" r="1.2" fill="#C49A6C" opacity="0.5" />
          <circle cx="10" cy="6" r="0.9" fill="#6E6E6E" opacity="0.4" />
          <circle cx="-7" cy="-7" r="0.8" fill="#6E6E6E" opacity="0.35" />
          <circle cx="17" cy="2" r="0.7" fill="#C49A6C" opacity="0.35" />
        </g>
      </g>
    </svg>
  );
}
