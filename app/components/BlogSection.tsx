import Link from "next/link";
import Image from "next/image";
import { RefObject } from "react";

interface BlogSectionProps {
  blogs: { title: string; image: string; link: string }[];
  blogRef: RefObject<HTMLDivElement | null>;
  scrollBlogLeft: () => void;
  scrollBlogRight: () => void;
}

export default function BlogSection({ blogs, blogRef, scrollBlogLeft, scrollBlogRight }: BlogSectionProps) {
  return (
    <section className="py-16 bg-[#F6F6F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-12 text-[rgb(26,62,111)] max-w-[600px] mx-auto leading-[56px]">
          Check out our blog for more meditation, sleep, stress, and mental health resources.
        </h2>
        <div className="relative max-w-6xl mx-auto">
          <div ref={blogRef} className="flex overflow-x-auto gap-6 pb-12 hide-scrollbar">
            {blogs.map((blog, index) => (
              <div key={index} className="min-w-[485px] w-[485px] h-[465px] flex-shrink-0 rounded-2xl overflow-hidden bg-white">
                <article className="h-full">
                  <Link href={blog.link} className="block h-full">
                    <div className="h-[300px] relative overflow-hidden">
                      <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex flex-col">
                      <span className="text-[#3a97d3] text-xs uppercase tracking-wider font-medium">Blog</span>
                      <h3 className="text-xl font-medium mt-2 text-[rgb(26,62,111)] leading-snug">{blog.title}</h3>
                    </div>
                  </Link>
                </article>
              </div>
            ))}
          </div>
          {/* Navigation arrows for blog scroll (optional) */}
          <div className="flex justify-between mt-4">
            <button onClick={scrollBlogLeft} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="#4655AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={scrollBlogRight} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="#4655AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
