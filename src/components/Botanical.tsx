// Thin botanical neem-leaf SVG line divider + curved section transitions

export function LeafDivider({ color = '#1F3D2B', flip = false, className = '' }: { color?: string; flip?: boolean; className?: string }) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 40"
        className="w-full h-6 md:h-8"
        fill="none"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
      >
        <path d="M0 20 H480" opacity="0.4" />
        <path d="M720 20 H1200" opacity="0.4" />
        <g transform="translate(600 20)">
          <path d="M-30 0 Q -15 -12 0 0 Q 15 12 30 0" opacity="0.6" />
          <path d="M-18 0 Q -9 6 0 0 Q 9 -6 18 0" opacity="0.4" />
          <circle cx="0" cy="0" r="1.5" fill={color} stroke="none" />
          <path d="M-45 -3 Q -38 -8 -32 -3" opacity="0.3" />
          <path d="M45 3 Q 38 8 32 3" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

// Curved SVG transition between cream and green sections
export function CurveTop({ from = '#F7F3EA', to = '#1F3D2B' }: { from?: string; to?: string }) {
  return (
    <div className="w-full leading-none" aria-hidden>
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-12 md:h-20 block">
        <path d="M0 0 L1200 0 L1200 30 Q 600 100 0 30 Z" fill={to} />
      </svg>
    </div>
  );
}

export function CurveBottom({ from = '#1F3D2B', to = '#F7F3EA' }: { from?: string; to?: string }) {
  return (
    <div className="w-full leading-none" aria-hidden>
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-12 md:h-20 block">
        <path d="M0 50 Q 600 -20 1200 50 L1200 80 L0 80 Z" fill={to} />
      </svg>
    </div>
  );
}

// Ornamental botanical corner frame for the packages section
export function CornerFrame({ color = '#8FA68A' }: { color?: string }) {
  const corner = (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round">
      <path d="M4 30 Q 4 4 30 4" opacity="0.7" />
      <path d="M10 30 Q 10 10 30 10" opacity="0.4" />
      <path d="M16 20 Q 22 14 30 14" opacity="0.5" />
      <path d="M8 20 Q 14 16 18 12" opacity="0.3" />
      <circle cx="4" cy="4" r="1.6" fill={color} stroke="none" />
    </svg>
  );
  return (
    <>
      <div className="absolute top-3 left-3">{corner}</div>
      <div className="absolute top-3 right-3 rotate-90">{corner}</div>
      <div className="absolute bottom-3 right-3 rotate-180">{corner}</div>
      <div className="absolute bottom-3 left-3 -rotate-90">{corner}</div>
    </>
  );
}
