import Image from "next/image";

export default function PremiumSection() {
  return (
    <section className="relative overflow-hidden bg-[#E3EBFE]">
      <div className="container mx-auto px-4 py-[200px] text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-[600] mb-12 text-[rgb(26,62,111)]">
          Start your free trial of<br />Calm Premium.
        </h2>
        <div className="max-w-lg mx-auto mb-8">
          <div className="border border-gray-300 rounded-lg bg-white p-6 relative">
            <div
              className="absolute -top-4 right-8 text-white text-sm px-4 py-1"
              style={{
                background: "linear-gradient(135deg, rgb(83, 64, 203) 0%, rgb(137, 70, 163) 100%)",
                borderRadius: "10px",
              }}
            >
              14-Day Free Trial
            </div>
            <div className="flex justify-between items-center">
              <div className="text-left">
                <div className="font-medium text-xl text-[rgb(26,62,111)]">Yearly</div>
                <div className="text-gray-700">US$49.99/yr.</div>
              </div>
              <div className="text-right">
                <div className="text-gray-700">US$4.17/mo.</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            After your free trial, the yearly subscription is US$49.99 and automatically renews each year until
            cancelled.{' '}
            <a href="/terms" className="text-[rgb(26,62,111)] hover:underline">Terms</a> |{' '}
            <a href="/cancel" className="text-[rgb(26,62,111)] hover:underline">Cancel anytime</a>
          </p>
          <button
            className="w-full text-white py-4 rounded-full font-medium mt-8 text-lg"
            style={{ background: "linear-gradient(90deg, #4A75B2 0%, #6461E0 100%)" }}
          >
            Continue
          </button>
        </div>
      </div>
      {/* Wave background image */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <Image
          src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&w=3840&q=75"
          alt="Blue wave background"
          width={3840}
          height={800}
          className="w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
