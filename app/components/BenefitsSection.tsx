import Link from "next/link";

export default function BenefitsSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-medium text-center mb-12 text-[rgb(26,62,111)]">
        We're here to help you feel better.
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-[#e6f4fa] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3a97d3]">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2 text-[rgb(26,62,111)]">Stress less.</h3>
          <p className="text-gray-600 mb-4">
            Calm helps reduce stress and anxiety through guided meditations and breathing exercises.
          </p>
          <Link href="/stress" className="text-[#3a97d3] font-medium">Learn More</Link>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-[#f0e6fa] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9c5dd3]">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
              <path d="M12 6V12L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2 text-[rgb(26,62,111)]">Sleep more.</h3>
          <p className="text-gray-600 mb-4">
            Fall asleep faster with calming sleep stories, relaxing music and meditations.
          </p>
          <Link href="/sleep" className="text-[#9c5dd3] font-medium">Learn More</Link>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-[#e6faf0] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3ad383]">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2 text-[rgb(26,62,111)]">Live mindfully.</h3>
          <p className="text-gray-600 mb-4">
            Improve focus and presence with mindfulness exercises and guided meditations.
          </p>
          <Link href="/mindfulness" className="text-[#3ad383] font-medium">Learn More</Link>
        </div>
      </div>
    </section>
  );
}
