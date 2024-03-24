"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import Header from "../components/Header";
import { HoverEffect } from "../components/ui/card-hover-effect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <div className='mx-auto mt-24'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-2 text-base'>✨ New: Our AI Integration just landed</div>
        <div className='text-6xl font-bold my-4'>Think better with Reflect</div>
        <div className='text-[#86809C] text-lg'>Never miss a note, idea or connection.</div>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div className='mx-auto my-12'>
        <div className='text-[#A5AADC] border border-[#493A72] w-fit rounded-full py-1 px-2 text-base'>Reflect AI</div>
        <div className='text-6xl font-bold my-4'>Notes with an AI assistant</div>
        <div className='text-[#86809C] text-lg'>Reflect uses GPT-4 and Whisper from OpenAI to improve your writing,
organize your thoughts, and act as your intellectual thought partner.</div>
      </div>

      <div className="max-w-5xl mx-auto px-3">
        <div className="mt-3 text-2xl">What can you do with Reflect AI?</div>
        <HoverEffect items={projects2} />
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