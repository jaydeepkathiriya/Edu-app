"use client";

import DisplayCards from "@/components/ui/display-cards";
import { FileText, HelpCircle, CreditCard, BookOpen, Video, Brain } from "lucide-react";

const educationCards = [
  {
    icon: <Video className="size-4 text-blue-300" />,
    title: "Video Transcription",
    description: "AI-powered lecture transcription",
    date: "Latest Feature",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Brain className="size-4 text-purple-300" />,
    title: "Smart Summaries",
    description: "Key concepts extracted automatically",
    date: "AI Powered",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <HelpCircle className="size-4 text-teal-300" />,
    title: "Quiz Generation",
    description: "Interactive questions created instantly",
    date: "Popular",
    iconClassName: "text-teal-500",
    titleClassName: "text-teal-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={educationCards} />
      </div>
    </div>
  );
}

export { DisplayCardsDemo };