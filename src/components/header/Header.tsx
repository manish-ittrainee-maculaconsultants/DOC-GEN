"use client";

import { ChevronDown, Grid3X3, Menu, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
    { label: "Documents", href: "/documents" },
    { label: "Templates", href: "/templates" },
    { label: "Pricing", href: "/pricing" },
];
const navigationTools = [
    { label: "Create DOC"  },
    { label: "AI Tools"  },
]

const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <nav
                className="mx-auto flex h-16 max-w-350 items-center justify-between gap-6 px-6 lg:px-8"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2"
                    aria-label="AI Docs home"
                >
                    <Image
                        src="/images/Docsy_AI_logo.png"
                        alt="Docsy_AI_ logo"
                        height={100}
                        width={140}
                        />
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-semibold uppercase text-slate-900 transition-colors hover:text-red-600"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/documents/new"
                        className="flex items-center gap-2 text-sm font-semibold uppercase text-slate-900 transition-colors hover:text-red-600"
                    >
                        Create
                        <ChevronDown className="size-4" aria-hidden="true" />
                    </Link>
                    <Link
                        href="/docs"
                        className="flex items-center gap-2 text-sm font-semibold uppercase text-slate-900 transition-colors hover:text-red-600"
                    >
                        All Tools
                        <ChevronDown className="size-4" aria-hidden="true" />
                    </Link>
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-5">
                    <div className="hidden items-center gap-5 sm:flex">
                        <Link
                            href="/login"
                            className="text-sm font-medium text-slate-900 transition-colors hover:text-red-600"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                        >
                            Get Started
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="text-slate-900 transition-colors hover:text-red-600 lg:hidden"
                        aria-label="Open navigation menu"
                    >
                        <Menu className="size-6" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="hidden text-slate-900 transition-colors hover:text-red-600 lg:block"
                        aria-label="Open tools menu"
                    >
                        <Grid3X3 className="size-7" strokeWidth={2.5} aria-hidden="true" />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;