import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  onTryCalmClick?: () => void;
}

export default function HeroSection({ onTryCalmClick }: HeroSectionProps) {
  return (
    <section className="relative z-10">
      <div className="w-full h-[480px] relative">
        <Image
          src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fjasper-lake-hero-banner.webp&w=3840&q=75"
          alt="Serene mountain lake landscape"
          fill
          className="object-cover"
          priority
        />
        {/* Blur overlay at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none z-20" style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(247,247,247,0.7) 85%, #F7F7F7 100%)"
        }} />
      </div>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-[3rem] font-[600] my-4 text-[rgb(26,62,111)]">
          Calm your mind. Change your life.
        </h1>
        <p className="text-[rgba(0,0,0,0.8)] text-[1.125rem] max-w-4xl mx-auto mb-8 leading-[28px]">
          Mental health is hard. Getting support doesn't need to be. Our app puts the tools to feel better in your back pocket, with personalized content to manage stress and anxiety, get better sleep, and feel more present in your life. Relax your mind, and wake up as the person you want to be.
        </p>
        <button
          type="button"
          onClick={onTryCalmClick}
          className="text-white rounded-full inline-flex items-center justify-center font-[600] text-[1.25rem]"
          style={{
            background: "linear-gradient(rgb(36, 119, 170) 0%, rgb(100, 97, 224) 100%)",
            width: "335px",
            height: "56px",
          }}
        >
          Try Calm for Free
        </button>
      </div>
    </section>
  );
}
