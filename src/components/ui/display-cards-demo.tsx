"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Video, Brain, HelpCircle, Sparkles, Zap, BookOpen } from "lucide-react";

const educationCards = [
  {
    icon: <Video className="size-4 text-white" />,
    title: "Video Transcription",
    description: "AI-powered lecture transcription",
    date: "🚀 Latest Feature",
    iconClassName: "text-blue-600",
    titleClassName: "text-blue-600",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-gradient-to-br before:from-blue-500/20 before:to-purple-500/20 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
  },
  {
    icon: <Brain className="size-4 text-white" />,
    title: "Smart Summaries",
    description: "Key concepts extracted automatically",
    date: "🧠 AI Powered",
    iconClassName: "text-purple-600",
    titleClassName: "text-purple-600",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-gradient-to-br before:from-purple-500/20 before:to-pink-500/20 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
  },
  {
    icon: <HelpCircle className="size-4 text-white" />,
    title: "Quiz Generation",
    description: "Interactive questions created instantly",
    date: "⭐ Popular",
    iconClassName: "text-teal-600",
    titleClassName: "text-teal-600",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200",
  },
];

function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-12">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={educationCards} />
      </div>
    </div>
  );
}

export { DisplayCardsDemo };