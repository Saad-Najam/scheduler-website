import React from 'react';

export default function CadenceLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="5" height="20" rx="1.5" fill="#0B5FFF" />
      <rect x="10" y="11" width="5" height="15" rx="1.5" fill="#0B5FFF" fillOpacity="0.8" />
      <rect x="18" y="4" width="5" height="22" rx="1.5" fill="#0B5FFF" />
      <rect x="26" y="14" width="5" height="12" rx="1.5" fill="#0B5FFF" fillOpacity="0.6" />
      <text
        x="38"
        y="22"
        fontFamily="Geist, Inter, sans-serif"
        fontSize="18"
        fontWeight="600"
        letterSpacing="-0.03em"
        className="fill-current text-on-surface"
      >
        Cadence
      </text>
    </svg>
  );
}
