import Link from "next/link";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section className="container mx-auto px-[80px] py-12">
      <h2 className="text-[36px] font-[600] text-center my-12 text-[rgb(26,62,111)]">
        We're here to help you feel better.
      </h2>
      <div className="grid md:grid-cols-3 gap-x-8 w-max mx-auto mt-4 font-[400]">
        <div className="text-left w-[300px]">
          <Image src="/images/stress.svg" className="mb-10" alt="Stress" width={56} height={56} />
          <h3 className="text-[32px] font-medium mb-2 text-[rgb(26,62,111)]">Stress less.</h3>
          <p className="text-gray-600 mb-4 text-[1.125rem]">
            Get in-the-moment relief for stress and anxiety so you can get back to living.
          </p>
          <Link href="/stress" className="text-[#3a97d3] font-medium">Learn More</Link>
        </div>
        <div className="text-left w-[300px] ">
          <Image src="/images/sleep.svg" className="mb-10"alt="Sleep" width={56} height={56} />
          <h3 className="text-[32px] font-medium mb-2 text-[rgb(26,62,111)]">Sleep more.</h3>
          <p className="text-gray-600 mb-4 text-[1.125rem]">
           Fall asleep (and stay asleep) naturally and peacefully.
          </p>
          <Link href="/sleep" className="text-[#9c5dd3] font-medium">Learn More</Link>
        </div>
        <div className="text-left w-[300px]">
          <Image src="/images/live.svg" className="mb-10" alt="Mindfulness" width={56} height={56} />
          <h3 className="text-[32px] font-medium mb-2 text-[rgb(26,62,111)]">Live mindfully.</h3>
          <p className="text-gray-600 mb-4 text-[1.125rem]">
            Navigate life's ups and downs with resilience, confidence and guided support.
          </p>
          <Link href="/mindfulness" className="text-[#3ad383] font-medium">Learn More</Link>
        </div>
      </div>
    </section>
  );
}
