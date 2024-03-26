"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import Header from "../components/Header";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { HoverEffect1 } from "@/components/ui/card-hover-effect1";
import { HoverEffect2 } from "@/components/ui/card-hover-effect2";
import Footer from "@/components/Footer";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { GlobeDemo } from "@/components/Globe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <div className='mx-auto mt-24 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>✨ New: Our AI Integration just landed</div>
        <div className='text-6xl font-normal my-4'>Think better with Reflect</div>
        <div className='text-[#86809C] text-lg'>Never miss a note, idea or connection.</div>
      </div>
      <iframe
        className='h-[30rem] w-[60rem] mt-12'
        allowFullScreen
        loading='lazy'
        src={`https://www.youtube.com/embed/fYhInYej-lg?enablejsapi=1&origin=https://mindfulfeed.in/`}
        frameBorder="0"
        referrerPolicy="no-referrer" />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>Reflect AI</div>
        <div className='text-6xl font-normal my-4'>Notes with an AI assistant</div>
        <div className='text-[#86809C] text-lg'>Reflect uses GPT-4 and Whisper from OpenAI to improve your writing, <br />
organize your thoughts, and act as your intellectual thought partner.</div>
      </div>

      <div className="max-w-5xl mx-auto px-3 justify-center flex flex-col items-center">
        <div className="mt-3 text-2xl">What can you do with Reflect AI?</div>
        <HoverEffect1 items={projects2} />
      </div>

      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>All your notes, connected</div>
        <div className='text-6xl font-normal my-4'>Give your brain superpowers</div>
        <div className='text-[#86809C] text-lg'>Mirror the way your mind works by associating notes through backlinks. <br />
Reflect builds you a second brain that you can reference anytime.</div>
      </div>

      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>Research and reading</div>
        <div className='text-6xl font-normal my-4'>Never lose information</div>
        <div className='text-[#86809C] text-lg '>Collect your web snippets, Kindle highlights and important links – all in one place. <br />
Then quickly find them again from any device.</div>
      </div>

      <div className="max-w-5xl px-3">
        <HoverEffect2 items={projects3} />
      </div>

      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>Meetings</div>
        <div className='text-6xl font-normal my-4'>Get more out <br />
of your meetings</div>
        <div className='text-[#86809C] text-lg '>Keep track of all your meetings and what was discussed. <br />
Import events quickly with our Google Calendar and Outlook integrations.</div>
      </div>

      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>Integrations</div>
        <div className='text-6xl font-normal my-4'>Use Reflect <br />
with other apps</div>
      </div>

      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>Get access</div>
        <div className='text-6xl font-normal my-4'>We like keeping things simple <br />
One plan one price.</div>
        <div>
          <div className="flex justify-center gap-2 m-1">
            <div className="text-5xl font-bold">$10</div>
            <div>/month <br/> (billed annually)</div>
          </div>
          <div className="flex gap-5 m-3 justify-between">
            <div>
              <li className="my-3">Networked note-taking</li>
              <li className="my-3">Networked note-taking</li>
              <li className="my-3">Networked note-taking</li>
            </div>
            <div>
              <li className="my-3">Networked note-taking</li>
              <li className="my-3">Networked note-taking</li>
              <li className="my-3">Networked note-taking</li>
            </div>
          </div>
        </div>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-lg py-1 px-3 text-base mt-3'>Start your 14-day trial</div>
      </div>

      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>Wall of love</div>
        <div className='text-6xl font-normal my-4'>Loved by thinkers</div>
        <div className='text-[#86809C] text-lg '>Here’s what people are saying about us</div>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>About</div>
        <div className='text-6xl font-normal my-4'>We're an indie team <br/>
dotted across the globe</div>
        <div className='text-[#86809C] text-lg '>Our mission is to improve the way people think by making <br/> a jolly good note-taking app.</div>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-lg py-1 px-3 text-base mt-12'>See our values</div>
        <GlobeDemo />
      </div>

      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>Academy</div>
        <div className='text-6xl font-normal my-4'>Learn how to take great <br />
notes at our academy</div>
        <div className='text-[#86809C] text-lg '>Master the principles of note-taking in <br />
Reflect's free online Academy.</div>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-lg py-1 px-3 text-base mt-4'>Take the course</div>
      </div>

      <div className='mx-auto my-12 justify-center flex flex-col items-center'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-3 text-base'>Get started</div>
        <div className='text-6xl font-normal my-4'>Think better with Reflect</div>
        <div className='text-[#86809C] text-lg '>Never miss a note, idea or connection.</div>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-lg py-1 px-3 text-base mt-4'>Start your 14-day trial</div>
      </div>

      <Footer />
    </main>
  );
}

export const projects = [
  {
    title: "Built for speed",
    description:
      "Instantly sync your notes across devices",
    link: "https://stripe.com",
  },
  {
    title: "Networked notes",
    description:
      "Form a graph of ideas with backlinked notes",
    link: "https://netflix.com",
  },
  {
    title: "iOS app",
    description:
      "Capture ideas on the go, online or offline",
    link: "https://google.com",
  },
  {
    title: "End-to-end encryption",
    description:
      "Only you can access your notes",
    link: "https://meta.com",
  },
  {
    title: "Calendar integration",
    description:
      "Keep track of meetings and agendas",
    link: "https://amazon.com",
  },
  {
    title: "Publishing",
    description:
      "Share anything you write with one click",
    link: "https://microsoft.com",
  },
  {
    title: "Instant capture",
    description:
      "Save snippets from your browser and Kindle",
    link: "https://microsoft.com",
  },
  {
    title: "Frictionless search",
    description:
      "Easily recall and index past notes and ideas",
    link: "https://microsoft.com",
  },
];

export const projects2 = [
  {
    title: "Transcribe voice notes",
    description:
      "with human-level accuracy",
    link: "https://stripe.com",
  },
  {
    title: "Generate article outlines",
    description:
      "from your scattered thoughts",
    link: "https://netflix.com",
  },
  {
    title: "List key takeaways and action",
    description:
      "Citems from your meeting notes",
    link: "https://google.com",
  },
  {
    title: "Fix grammar, spelling,",
    description:
      "and improve your writing",
    link: "https://meta.com",
  },
  {
    title: "Save your own",
    description:
      "custom prompts",
    link: "https://amazon.com",
  },
];

export const projects3 = [
  {
    title: "Integrated with your devices",
    description:
      "We're everywhere, mobile or desktop, online or offline. Everything is synced in real-time.",
    link: "https://stripe.com",
  },
  {
    title: "Secure but open",
    description:
      "End-to-end encryption keeps your notes secure. Our export and API keeps your notes accessible.",
    link: "https://netflix.com",
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];