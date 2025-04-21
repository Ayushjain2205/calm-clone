import Image from "next/image";

export default function ContentTileCollage() {
  return (
    <section className="w-full py-12 relative">
      <div className="relative w-full h-[500px]">
        <Image
          src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fcontent-tile-collage.webp&w=3840&q=75"
          alt="Calm content tile collage"
          fill
          className="object-cover"
        />
        {/* Fading effect overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, white, transparent 15%, transparent 85%, white)",
          }}
        ></div>
      </div>
    </section>
  );
}
