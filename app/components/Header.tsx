import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  scrolled: boolean;
  onTryCalmClick?: () => void;
}

export default function Header({ scrolled, onTryCalmClick }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-10 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
      style={!scrolled ? { background: "linear-gradient(rgb(23, 98, 147) 0%, rgba(23, 98, 147, 0.337) 71%, rgba(23, 98, 147, 0) 100%)" } : {backgroundColor: "white"}}
    >
      <div className="flex items-center justify-between h-[100px]">
        <div className="flex items-center gap-8 font-[600] text-[1.125rem]">
          <Link href="/" className="flex items-center">
            {!scrolled ? (
              <Image src="/calm.svg" alt="Calm Logo" width={56} height={56} priority />
            ) : (
              <Image src="/calm-text.svg" alt="Calm Logo" width={75} height={30} priority />
            )}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/sleep" className={`${scrolled ? "text-[rgb(26,62,111)]" : "text-white"} hover:opacity-80`}>
              Sleep
            </Link>
            <Link
              href="/stress-anxiety"
              className={`${scrolled ? "text-[rgb(26,62,111)]" : "text-white"} hover:opacity-80`}
            >
              Stress & Anxiety
            </Link>
            <Link
              href="/mindfulness"
              className={`${scrolled ? "text-[rgb(26,62,111)]" : "text-white"} hover:opacity-80`}
            >
              Mindfulness
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 font-[600] text-[1.125rem]">
          <Link
            href="/health"
            className={`${scrolled ? "text-[rgb(26,62,111)]" : "text-white"} hidden md:inline-block hover:opacity-80`}
          >
            Calm Health
          </Link>
          <Link
            href="/login"
            className={`${scrolled ? "text-[rgb(26,62,111)]" : "text-white"} hidden md:inline-block hover:opacity-80`}
          >
            Log In
          </Link>
          <button
            type="button"
            onClick={onTryCalmClick}
            className={`text-white px-4 rounded-full inline-flex items-center justify-center font-[600] ${scrolled ? "bg-[#4655AE]" : "bg-white bg-opacity-20 backdrop-blur-sm"}`}
            style={{
              width: "200px",
              height: "56px",
              ...(scrolled ? { background: "linear-gradient(rgb(36, 119, 170) 0%, rgb(100, 97, 224) 100%)" } : {}),
            }}
          >
            Try Calm for Free
          </button>
          <button className="p-2 md:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={scrolled ? "text-[rgb(26,62,111)]" : "text-white"}
            >
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
