import React from "react";
import { Footer } from "@/components/ui/demo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-4">
          DOC-GEN Documentation
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Smart AI documentation generator. Scroll down to see the integrated footer component with dark mode toggle.
        </p>
      </main>
      <Footer />
    </div>
  );
}