
"use client";

export default function Card() {
  return (
    <div className="group relative h-[254px] w-[190px] overflow-hidden rounded-[20px] border border-white/20 bg-white font-sans shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2.5 hover:border-violet-600/20 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] active:translate-y-[-5px] active:scale-[0.98]">
      
      {/* Shine Effect */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover:animate-shine group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.8)_50%,transparent_60%)] bg-[length:200%_100%]" />

      {/* Glow Effect */}
      <div className="pointer-events-none absolute -inset-2.5 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.3)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card Content */}
      <div className="relative z-[2] flex h-full flex-col gap-3 p-5">
        
        {/* Badge */}
        <div className="absolute right-3 top-3 z-[1] scale-75 rounded-full bg-emerald-500 px-2 py-1 text-[11px] font-semibold text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          NEW
        </div>

        {/* Image Area */}
        <div className="relative h-[100px] w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_30%),repeating-linear-gradient(45deg,rgba(139,92,246,0.1)_0px,rgba(139,92,246,0.1)_2px,transparent_2px,transparent_4px)] opacity-50" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1">
          <p className="m-0 text-[17px] font-bold text-slate-800 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-violet-600">
            Premium Design
          </p>

          <p className="m-0 text-xs text-slate-800 opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
            Hover to reveal stunning effects
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          <p className="m-0 text-base font-bold text-slate-800 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-violet-600">
            $49.99
          </p>

          <button
            type="button"
            aria-label="Add premium design"
            className="flex h-7 w-7 scale-90 items-center justify-center rounded-full bg-violet-600 text-white transition-all duration-300 group-hover:scale-100 group-hover:shadow-[0_0_0_4px_rgba(124,58,237,0.2)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="group-hover:animate-pulse"
              aria-hidden="true"
            >
              <path d="M4 12H20M12 4V20" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
