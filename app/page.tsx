"use client"

import type React from "react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import Header from "./components/Header"
import Spacer from "./components/Spacer"
import HeroSection from "./components/HeroSection"
import BenefitsSection from "./components/BenefitsSection"
import ContentTileCollage from "./components/ContentTileCollage"
import TestimonialsSection from "./components/TestimonialsSection"
import PremiumSection from "./components/PremiumSection"
import BlogSection from "./components/BlogSection"
import Footer from "./components/Footer"

// Collapsible component for FAQ items
const Collapsible = ({ title, content }: { title: string; content: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="border-b border-gray-200">
      <button
        className="py-4 w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg text-[rgb(26,62,111)]">{title}</span>
        <span className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.059 6.073 12.76.371a.614.614 0 1 1 .868.868l-6.57 6.57-6.57-6.57a.612.612 0 0 1 0-.868c.24-.24.628-.24.867 0L7.06 6.073Z"
              fill="#C6C6C6"
            />
          </svg>
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-200 ease-in-out" style={{ height: contentHeight }}>
        <div ref={contentRef} className="pb-6">
          {content}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      quote: "When I cannot fall asleep, I turn on this app and am out within 5 minutes.",
      author: "Brandy from Houston",
    },
    {
      quote:
        "I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me.",
      author: "John from Chicago",
    },
    {
      quote: "Calm has improved my sleep immeasurably and helps me feel more like myself.",
      author: "Allison from New York",
    },
    {
      quote: "The sleep stories are amazing. I've never been able to fall asleep so quickly and stay asleep all night.",
      author: "Michael from Seattle",
    },
  ]

  const handlePrevious = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial(currentTestimonial - 1)
      scrollToTestimonial(currentTestimonial - 1)
    }
  }

  const handleNext = () => {
    if (currentTestimonial < testimonials.length - 1) {
      setCurrentTestimonial(currentTestimonial + 1)
      scrollToTestimonial(currentTestimonial + 1)
    }
  }

  const scrollToTestimonial = (index: number) => {
    if (testimonialRef.current) {
      const scrollAmount = index * (485 + 24) // card width + gap
      testimonialRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollBlogLeft = () => {
    if (blogRef.current) {
      blogRef.current.scrollBy({
        left: -(485 + 24), // card width + gap
        behavior: "smooth",
      })
    }
  }

  const scrollBlogRight = () => {
    if (blogRef.current) {
      blogRef.current.scrollBy({
        left: 485 + 24, // card width + gap
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header scrolled={scrolled} />

      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Full-width Content Tile Collage */}
        <ContentTileCollage />

        {/* Testimonials Section */}
        <TestimonialsSection
          testimonials={testimonials}
          currentTestimonial={currentTestimonial}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          testimonialRef={testimonialRef as React.RefObject<HTMLDivElement>}
        />

        {/* Premium Subscription Section */}
        <PremiumSection />

        {/* Blog Section */}
        <BlogSection
          blogs={[
            {
              title: "Are staycations *actually* better than vacations for real rest?",
              image: "/cozy-reading-nook.png",
              link: "/blog/staycation",
            },
            {
              title: "How to *actually* have a better work-life balance",
              image: "/balanced-priorities.png",
              link: "/blog/work-life-balance",
            },
            {
              title: "How the phases of your menstrual cycle affect mental health",
              image: "/serene-meditation.png",
              link: "/blog/menstrual-cycle-phases",
            },
            {
              title: "How to communicate better with all the people in your life",
              image: "/diverse-team-brainstorm.png",
              link: "/blog/how-to-communicate-better",
            },
            {
              title: "Here's why you should establish family values (and how to do it)",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-21%20at%208.05.20%E2%80%AFPM-7EXZsdA4psKUPRJlCDhPY7E9i5hBvh.png",
              link: "/blog/family-values",
            },
            {
              title: "What is Tonglen meditation? A guide to getting started",
              image: "/serene-meditation.png",
              link: "/blog/tonglen-meditation",
            },
          ]}
          blogRef={blogRef}
          scrollBlogLeft={scrollBlogLeft}
          scrollBlogRight={scrollBlogRight}
        />

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 bg-white">
          <h2 className="text-3xl font-[600] text-center mb-12 text-[rgb(26,62,111)]" id="faq-heading">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto" aria-labelledby="faq-heading ">
            <h3 className="font-medium uppercase text-gray-500 mb-4">GENERAL</h3>
            <Collapsible
              title="What is Calm?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Calm is the #1 mental health app designed to help you manage stress, sleep better, and live a
                    happier, healthier life. Our research-based tools help you build life-changing habits to support
                    your mental health. If you're having trouble falling asleep, our 500+{" "}
                    <Link href="/app/class/sleep-popular-sleep-stories" className="text-[#3a97d3]">
                      Sleep Stories
                    </Link>
                    ®, soundscapes, and guided{" "}
                    <Link href="/app/meditate" className="text-[#3a97d3]">
                      sleep meditations
                    </Link>{" "}
                    can lull you to sleep. If you're spiraling in negative thoughts and need immediate relief, our
                    60-second Breathe Bubble grounds you in the moment and helps your body return to a state of
                    relaxation. If you're overwhelmed at work and need a breather, our{" "}
                    <Link href="/app/class/work-managing-overwhelm" className="text-[#3a97d3]">
                      stress and burnout specialists
                    </Link>{" "}
                    can guide you through exercises to help calm your mind. We're here for you whenever or wherever you
                    need us with more content and tools being added monthly.
                  </p>
                </div>
              }
            />
            <Collapsible
              title="What's included in a Calm subscription?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    A Calm subscription unlocks our full library of{" "}
                    <Link href="/app/class/meditate-quick-and-easy" className="text-[#3a97d3]">
                      meditations
                    </Link>
                    ,{" "}
                    <Link href="/app/class/sleep-popular-sleep-stories" className="text-[#3a97d3]">
                      Sleep Stories
                    </Link>
                    ,{" "}
                    <Link href="/app/music" className="text-[#3a97d3]">
                      music
                    </Link>
                    , and other features. The subscription includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Multiple original{" "}
                      <Link href="/app/dailies" className="text-[#3a97d3]">
                        daily offerings
                      </Link>{" "}
                      from a range of teachers to give your day a dose of wisdom, gratitude and encouragement
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Hours of{" "}
                      <Link href="/app/class/meditate-quick-and-easy" className="text-[#3a97d3]">
                        guided meditations
                      </Link>{" "}
                      covering sleep, anxiety, stress, gratitude, and much more
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Our entire library of more than 500+{" "}
                      <Link href="/app/class/sleep-popular-sleep-stories" className="text-[#3a97d3]">
                        Sleep Stories
                      </Link>
                      , with new stories added every week
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Exclusive{" "}
                      <Link href="/app/music" className="text-[#3a97d3]">
                        music
                      </Link>{" "}
                      tracks for focus, relaxation, and sleep
                    </li>
                  </ul>
                </div>
              }
            />
            <Collapsible
              title="Where should I get started once I download the app?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    If you have come to Calm to learn relaxation techniques and improve aspects of your mental health,
                    we recommend beginning with the{" "}
                    <Link href="/app/program/qK3IeqhiJP" className="text-[#3a97d3]">
                      7 Days of Calm
                    </Link>
                    , our introductory program that offers the basics of meditation, and then move on to the{" "}
                    <Link href="/app/program/YAcrQol9Wv" className="text-[#3a97d3]">
                      21 Days of Calm
                    </Link>
                    . With that foundation, you can explore our library of sessions and programs, which address themes
                    such as{" "}
                    <Link href="/app/meditate/anxiety" className="text-[#3a97d3]">
                      anxiety
                    </Link>
                    ,{" "}
                    <Link href="/app/sleep" className="text-[#3a97d3]">
                      sleep
                    </Link>
                    ,{" "}
                    <Link href="/app/meditate/focus" className="text-[#3a97d3]">
                      focus
                    </Link>
                    , and{" "}
                    <Link href="/app/meditate/self-care" className="text-[#3a97d3]">
                      gratitude
                    </Link>
                    . Additionally, for moments of acute stress or anxiety, we offer in-the-moment calming exercises via
                    our{" "}
                    <Link href="/app/program/_kCx96PwDb" className="text-[#3a97d3]">
                      Panic SOS
                    </Link>
                    ,{" "}
                    <Link href="/app/program/whzIxMJxVR" className="text-[#3a97d3]">
                      Body Scan
                    </Link>
                    , and breathing exercise features.
                  </p>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    If you have come to Calm to improve your sleep, we have a collection of over 500{" "}
                    <Link href="/app/class/sleep-popular-sleep-stories" className="text-[#3a97d3]">
                      Sleep Stories
                    </Link>{" "}
                    to help you drift off to restful sleep, ranging from{" "}
                    <Link href="/app/player/h5JpJ0Fqb2" className="text-[#3a97d3]">
                      classic literature
                    </Link>{" "}
                    to{" "}
                    <Link href="/app/class/tagged-sleep-nature" className="text-[#3a97d3]">
                      nature essays
                    </Link>
                    ,
                    <Link href="/app/class/tagged-sleep-kids" className="text-[#3a97d3]">
                      children's tales
                    </Link>
                    , scientific articles, and more. We update our Sleep Stories selection with new options to listen to
                    every week. We also have a collection of soothing Sleep Music.
                  </p>
                </div>
              }
            />
            <Collapsible
              title="What is meditation?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Meditation is the practice of allowing thoughts to come and go, as you learn to recognize and
                    release them without judgment. Studies show that a long-term meditation practice can actually help
                    shift your nervous system out of fight or flight and into the relaxed parasympathetic mode producing
                    a wide array of benefits* including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-[rgba(0,0,0,0.8)]">Decreased anxiety and depression symptoms</li>
                    <li className="text-[rgba(0,0,0,0.8)]">Chronic pain management</li>
                    <li className="text-[rgba(0,0,0,0.8)]">Lower stress levels</li>
                    <li className="text-[rgba(0,0,0,0.8)]">Improved sleep quality</li>
                  </ul>
                </div>
              }
            />
            <Collapsible
              title="What is mindfulness?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Mindfulness is a practice that involves intentionally bringing one's attention and awareness to the
                    present moment without judgment. It's about being fully present and engaged in the here and now,
                    rather than dwelling on the past or worrying about the future. Mindfulness encourages a
                    non-judgmental attitude towards one's thoughts, emotions and sensations, allowing them to arise and
                    pass without any added stress. By cultivating mindfulness, people often develop a greater sense of
                    clarity, calmness and overall wellbeing, as well as enhance their ability to respond skillfully to
                    the challenges of life.
                  </p>
                </div>
              }
            />

            <h3 className="font-medium uppercase text-gray-500 mb-4 mt-12">STRESS & ANXIETY</h3>
            <Collapsible
              title="What causes stress and anxiety?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Stress and anxiety can have various causes and can differ greatly from person to person. Here are a
                    few common factors that contribute to stress and anxiety:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Major life changes: Significant life events such as moving, getting married (or divorced),
                      starting a new job or experiencing the loss of a loved one can trigger it.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Work or school pressure: High workloads, tight deadlines, challenging bosses, or work pressure can
                      lead to stress and anxiety.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Financial challenges: Job loss, debt, or just struggling to make ends meet can be a significant
                      source of stress and anxiety.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Relationships: Whether romantic, familial or social, strain or conflict in relationships can cause
                      stress and anxiety.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Health concerns: Managing chronic illness, physical pain or battling a health condition can be a
                      cause, as well.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Traumatic experiences: Experiencing a traumatic event, such as an accident, abuse or even a
                      natural disaster can lead to anxiety-related conditions.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Uncertainty and change: Experiencing frequent change (even positive change!) or feeling uncertain
                      about the future can be a common cause of anxiety.
                    </li>
                  </ol>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    It's important to note that not everyone experiences stress and anxiety in the same way. If you're
                    dealing with stress and anxiety, it's recommended to seek support from a mental health professional
                    who can provide personalized guidance.
                  </p>
                </div>
              }
            />
            <Collapsible
              title="How can I manage my stress and anxiety?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Once you're in the Calm app, we recommend using a Breathing Bubble exercise if you're looking for
                    immediate stress or anxiety relief. Breathwork elicits the body's relaxation response which reduces
                    tension and lowers stress.
                  </p>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    We also have other content programs, including our{" "}
                    <Link href="/app/program/3ePnY22GC6" className="text-[#3a97d3]">
                      Overcome Stress and Anxiety
                    </Link>{" "}
                    collection in partnership with clinical psychologist, Dr. Julie Smith. In this series, Dr. Julie
                    guides listeners through high stress moments in real time, including panic attacks, negative thought
                    spirals, and more.
                  </p>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    In addition to Dr. Julie's series, you can find more guided breathing exercises and meditations in
                    our{" "}
                    <Link href="/app/meditate/anxiety" className="text-[#3a97d3]">
                      Reduce Stress & Anxiety
                    </Link>{" "}
                    collection. Let experts such as{" "}
                    <Link href="/app/class/popular-daily-jay" className="text-[#3a97d3]">
                      Jay Shetty
                    </Link>
                    ,{" "}
                    <Link href="/app/class/practice-tips-with-tamara" className="text-[#3a97d3]">
                      Tamara Levitt
                    </Link>
                    , and{" "}
                    <Link href="/app/player/0ADJHJs5a6" className="text-[#3a97d3]">
                      Chibs Okereke
                    </Link>{" "}
                    help guide you into peaceful mindfulness and relaxation.
                  </p>
                </div>
              }
            />

            <h3 className="font-medium uppercase text-gray-500 mb-4 mt-12">SLEEP</h3>
            <Collapsible
              title="Why do I have trouble sleeping?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    There can be various reasons why you may be experiencing trouble sleeping. Here are a few common
                    factors that can contribute to sleep difficulties:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Stress and Anxiety: High levels of stress or anxiety can make it difficult to relax and fall
                      asleep. Racing thoughts, worry, or an overactive mind can keep you awake at night.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Poor Sleep Habits: Irregular sleep patterns, inconsistent bedtime routines, excessive caffeine or
                      alcohol consumption, and engaging in stimulating activities before bed can disrupt your sleep.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Environmental Factors: Uncomfortable sleeping environment, excessive noise, extreme temperatures,
                      or inadequate lighting can interfere with your ability to fall asleep or stay asleep.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Medical Conditions: Certain medical conditions, such as chronic pain, sleep apnea, restless leg
                      syndrome, or hormonal imbalances, can disrupt your sleep.
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Mental Health Issues: Depression, bipolar disorder, post-traumatic stress disorder (PTSD), and
                      other mental health disorders can affect sleep patterns and quality.
                    </li>
                  </ol>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    If you're consistently having trouble sleeping, it's advisable to consult with a healthcare
                    professional who can help assess your specific situation and provide guidance that's tailored to
                    your needs.
                  </p>
                </div>
              }
            />
            <Collapsible
              title="How can I sleep better naturally?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    In the Calm app, we recommend starting with our Fall Asleep collection, which features our most
                    popular{" "}
                    <Link href="/app/class/sleep-popular-sleep-stories" className="text-[#3a97d3]">
                      Sleep Stories
                    </Link>
                    ®,{" "}
                    <Link href="/app/class/music-mood-wind-down" className="text-[#3a97d3]">
                      soundscapes
                    </Link>
                    ,{" "}
                    <Link href="/app/music" className="text-[#3a97d3]">
                      music
                    </Link>
                    , and{" "}
                    <Link href="/app/meditate" className="text-[#3a97d3]">
                      meditations
                    </Link>{" "}
                    based on your goals:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-[rgba(0,0,0,0.8)]">Help falling asleep: natural sleep aids</li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Getting back to sleep: reactive tools used to soothe and lull you back to sleep
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      Unwinding before bed: proactive tools to help start a sleep routine and focuses on sleep hygiene -
                      this means focusing on building habits and an environment designed for optimal sleep
                    </li>
                  </ul>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Our most popular sleep offering is our{" "}
                    <Link href="/app/class/sleep-popular-sleep-stories" className="text-[#3a97d3]">
                      Sleep Stories
                    </Link>
                    ®, which are bedtime stories designed to help you drift off to sleep. Many of our narrators are also
                    names you may already be familiar with, from artists like{" "}
                    <Link href="/app/player/2QQEAZ7IsG" className="text-[#3a97d3]">
                      Harry Styles
                    </Link>{" "}
                    and{" "}
                    <Link href="/app/program/nVKU_KxPlm" className="text-[#3a97d3]">
                      Michael Bublé
                    </Link>{" "}
                    to actors and actresses such as{" "}
                    <Link href="/app/player/TvmOdIeBVj" className="text-[#3a97d3]">
                      Jennifer Garner
                    </Link>{" "}
                    and{" "}
                    <Link href="/app/feeds/narrator-u141IqAGf" className="text-[#3a97d3]">
                      Matthew McConaughey
                    </Link>
                    .
                  </p>
                </div>
              }
            />
            <Collapsible
              title="Are Sleep Stories® good for kids and adults?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Absolutely! In a Calm Science study of 900+ parents (US) who use Calm Kids with their kids at least
                    once a week, parents reported they had lower stress and slept better, and that their kids fell
                    asleep faster and had less stress and anxiety.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-[rgba(0,0,0,0.8)]">
                      74% felt that Calm Kids helped lower their parenting-stress
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">63% felt that Calm Kids helped their own sleep</li>
                    <li className="text-[rgba(0,0,0,0.8)]">
                      95% say Calm Kids Sleep Stories® help their child fall asleep faster
                    </li>
                    <li className="text-[rgba(0,0,0,0.8)]">75% say Calm Kids meditations help their child</li>
                  </ul>
                </div>
              }
            />

            <h3 className="font-medium uppercase text-gray-500 mb-4 mt-12">SOUNDSCAPES</h3>
            <Collapsible
              title="How do different sound frequencies affect your brain?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Although it's commonly known now that there are different 'colors' of noises, it might not be known
                    what the difference between them are. Different types of noise have distinct frequency
                    characteristics, which means that the energy of the sound is distributed differently across the
                    frequency spectrum. As a result, how you perceive each noise can affect the use-case of each
                    frequency.
                  </p>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    White noise has equal power in every frequency band, between 20 hertz and 20,000 hertz, and gives
                    your brain something relaxing to focus on; this can help block out distractions and make it perfect
                    for sleep. Similarly, brown noise has more energy at lower frequencies, giving it a deep, 'booming'
                    noise. It is commonly used for relaxation and sleep.
                  </p>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Pink noise has less energy at higher frequencies. Pink noise is often described as having a "fuller"
                    sound compared to white noise. Naturally occurring examples of pink noise are rustling leaves, wind,
                    and heartbeats.
                  </p>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Lastly, it is theorized that green noise is calming because it simulates the spectrum of natural
                    noise without human-made noises; this noise has more energy at mid-range frequencies and is
                    sometimes used in sound masking for tinnitus.
                  </p>
                </div>
              }
            />
            <Collapsible
              title="How do binaural beats help improve focus and reduce anxiety?"
              content={
                <div className="prose max-w-none">
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Binaural beats are a type of sound therapy that involves playing two different tones in each ear,
                    creating a perceived beat frequency that is thought to affect brain waves. The idea is that when the
                    brain hears two slightly different frequencies, it tries to "reconcile" them by producing a third
                    frequency that is the difference between the two. This is known as the "frequency following
                    response," and it is believed to influence brain waves in a way that can be beneficial for focus and
                    relaxation.
                  </p>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Some research suggests that listening to binaural beats can help improve focus and reduce anxiety by
                    promoting a state of relaxation and reducing stress levels. One theory is that binaural beats can
                    influence the production of alpha waves in the brain, which are associated with relaxation and
                    reduced anxiety.
                  </p>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    Another theory is that binaural beats can help entrain the brain to a specific frequency associated
                    with improved focus or creativity. For example, some studies have suggested that listening to
                    binaural beats in the alpha or theta frequency range can help improve cognitive performance and
                    enhance creativity.
                  </p>
                  <p className="text-[rgba(0,0,0,0.8)]">
                    However, while some research has shown potential benefits of binaural beats for certain conditions,
                    such as anxiety and depression, the evidence is not yet conclusive.
                  </p>
                </div>
              }
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
