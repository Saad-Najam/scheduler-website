import React from 'react';

export default function CadenceLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="https://thequantumprimes.com/wp-content/uploads/2026/04/logo_image-e1775747096665-188x173.jpeg"
        alt="The Quantum Primes"
        className="h-8 w-8 object-contain rounded-md"
      />
      <div className="flex flex-col">
        <span className="font-display font-bold text-sm tracking-tight text-on-surface leading-none">
          The Quantum Primes
        </span>
        <span className="text-[10px] text-primary font-mono tracking-wider uppercase font-semibold">
          Advanced APS &amp; Data AI
        </span>
      </div>
    </div>
  );
}
