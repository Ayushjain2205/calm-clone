import { useRef } from "react";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  currentTestimonial: number;
  handlePrevious: () => void;
  handleNext: () => void;
  testimonialRef: React.RefObject<HTMLDivElement>;
}

export default function TestimonialsSection({
  testimonials,
  currentTestimonial,
  handlePrevious,
  handleNext,
  testimonialRef,
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-[#f8faff]">
      <div className="container mx-auto mt-4 px-4">
        <h2 className="text-3xl md:text-4xl font-[600] text-center mb-12 text-[rgb(26,62,111)]">
          Over 2 million 5-star reviews.
        </h2>
        <div className="relative max-w-6xl mx-auto">
          <div ref={testimonialRef} className="flex overflow-x-auto gap-6 pb-12 hide-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[485px] w-[485px] h-[440px] rounded-2xl overflow-hidden flex-shrink-0"
                style={{
                  background: "linear-gradient(180deg, #4A75B2 0%, #6461E0 100%)",
                }}
              >
                <article className="p-10 text-white h-full flex flex-col">
                  <svg width="65" height="58" viewBox="0 0 65 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M60.8833 0L64.5426 4.38372C59.2061 8.95478 55.2038 13.5258 52.5356 18.0969C49.9436 22.593 48.6476 27.1641 48.6476 31.8101C48.6476 32.8592 48.6476 33.646 48.6476 34.1705C48.7238 34.6202 48.8001 35.1072 48.8763 35.6318C49.0288 35.6318 49.2194 35.6318 49.4481 35.6318C51.5827 35.332 53.1074 35.1822 54.0222 35.1822C57.3003 35.1822 59.9304 36.1938 61.9125 38.2171C63.9708 40.2403 65 42.938 65 46.3101C65 49.6822 63.9327 52.4922 61.7981 54.7403C59.6636 56.9134 56.9191 58 53.5648 58C49.3718 58 45.7888 56.314 42.8156 52.9419C39.8425 49.4948 38.3559 45.2984 38.3559 40.3527C38.3559 33.084 40.2618 26.0026 44.0735 19.1085C47.9615 12.1395 53.5648 5.77003 60.8833 0ZM22.2987 0L26.0723 4.38372C20.6597 8.95478 16.6192 13.5258 13.951 18.0969C11.359 22.593 10.063 27.1641 10.063 31.8101C10.063 32.8592 10.063 33.646 10.063 34.1705C10.1392 34.6202 10.2155 35.1072 10.2917 35.6318C10.4442 35.6318 10.6348 35.6318 10.8635 35.6318C12.998 35.332 14.5227 35.1822 15.4376 35.1822C18.7919 35.1822 21.4601 36.1938 23.4422 38.2171C25.5006 40.2403 26.5297 42.938 26.5297 46.3101C26.5297 49.6822 25.4243 52.4922 23.2135 54.7403C21.0789 56.9134 18.3345 58 14.9802 58C10.8635 58 7.31855 56.314 4.34539 52.9419C1.44846 49.4948 0 45.2984 0 40.3527C0 33.009 1.90587 25.8902 5.71762 18.9961C9.52936 12.1021 15.0564 5.77003 22.2987 0Z"
                      fill="white"
                      fillOpacity="0.2"
                    ></path>
                  </svg>
                  <blockquote className="mb-6">
                    <p className="text-2xl">{testimonial.quote}</p>
                  </blockquote>
                  <p className="mb-2">{testimonial.author}</p>
                  <svg
                    width="136"
                    height="24"
                    viewBox="0 0 136 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Rating 5 star"
                  >
                    <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#F8D22D"></path>
                    <path d="M40 0L42.6942 8.2918H51.4127L44.3593 13.4164L47.0534 21.7082L40 16.5836L32.9466 21.7082L35.6407 13.4164L28.5873 8.2918H37.3058L40 0Z" fill="#F8D22D"></path>
                    <path d="M68 0L70.6942 8.2918H79.4127L72.3593 13.4164L75.0534 21.7082L68 16.5836L60.9466 21.7082L63.6407 13.4164L56.5873 8.2918H65.3058L68 0Z" fill="#F8D22D"></path>
                    <path d="M96 0L98.6942 8.2918H107.413L100.359 13.4164L103.053 21.7082L96 16.5836L88.9466 21.7082L91.6407 13.4164L84.5873 8.2918H93.3058L96 0Z" fill="#F8D22D"></path>
                    <path d="M124 0L126.694 8.2918H135.413L128.359 13.4164L131.053 21.7082L124 16.5836L116.947 21.7082L119.641 13.4164L112.587 8.2918H121.306L124 0Z" fill="#F8D22D"></path>
                  </svg>
                </article>
              </div>
            ))}
          </div>
          {/* Navigation buttons */}
          <ul className="flex justify-center mt-8 gap-4">
            <li>
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center ${currentTestimonial === 0 ? "bg-gray-200 text-gray-400" : "bg-white text-black hover:bg-gray-100"}`}
                aria-label="previous"
                type="button"
                disabled={currentTestimonial === 0}
                onClick={handlePrevious}
              >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 96 96">
                    <path
                      d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </li>
            <li>
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center ${currentTestimonial === testimonials.length - 1 ? "bg-gray-200 text-gray-400" : "bg-white text-black hover:bg-gray-100"}`}
                aria-label="next"
                type="button"
                disabled={currentTestimonial === testimonials.length - 1}
                onClick={handleNext}
              >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 96 96">
                    <path
                      d="M38.00025,14.00025 C38.51225,14.00025 39.02325,14.19525 39.41425,14.58625 L71.41425,46.58625 C72.19525,47.36725 72.19525,48.63325 71.41425,49.41425 L39.41425,81.41425 C38.63325,82.19525 37.36725,82.19525 36.58625,81.41425 C35.80525,80.63325 35.80525,79.36725 36.58625,78.58625 L67.17125,48.00025 L36.58625,17.41425 C35.80525,16.63325 35.80525,15.36725 36.58625,14.58625 C36.97725,14.19525 37.48825,14.00025 38.00025,14.00025"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
