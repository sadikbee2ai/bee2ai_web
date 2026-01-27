'use client';

import Image from 'next/image';

const Decoration = ({ src, className }: { src: string; className: string }) => (
  <div className={`absolute pointer-events-none -z-10 ${className}`}>
    <Image
      src={src}
      alt=""
      width={300}
      height={300}
      className="w-full h-auto opacity-40"
    />
  </div>
);

export default function PageDecorations() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-0">
      
      {/* Middle Left - Feature Section 1 */}
      <Decoration
        src="/vectors/decoration-3.svg"
        className="top-[2500px] left-[-80px] w-[200px] md:w-[300px]"
      />

      {/* Middle Right - Feature Section 2 */}
      <Decoration
        src="/vectors/decoration-4.svg"
        className="top-[1600px] right-[-60px] w-[280px] md:w-[380px]"
      />

      {/* Bottom Left - Feature Section 3 / Footer */}
      <Decoration
        src="/vectors/decoration-5.svg"
        className="top-[3580px] left-[180px] w-[320px] md:w-[420px]"
      />

      {/* Bottom Right - Footer */}
      <Decoration
        src="/vectors/decoration-6.svg"
        className="top-[4000px] right-[-50px] w-[350px] md:w-[450px] rotate-[-45deg]"
      />
    </div>
  );
}
