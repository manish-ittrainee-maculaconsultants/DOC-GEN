"use client";

import { useEffect, useRef, useState } from "react";
import {
  Image as ImageIcon,
  PenTool,
  Code2,
  Blocks,
  Monitor,
  Smartphone,
  CreditCard,
  ShieldCheck,
  LayoutGrid,
  Heart,
  HelpCircle,
  Globe,
  X,
  ChevronRight,
  Menu,
} from "lucide-react";

import ThemeToggle from "@/components/ui/ThemeToggle";

// Types for reusable components
type MenuLinkProps = {
  icon: typeof ImageIcon;
  title: string;
  description: string;
  href: string;
};

type NavLinkProps = {
  icon: typeof ImageIcon;
  title: string;
  href: string;
};

// Product and application links
const products = [
  {
    icon: ImageIcon,
    title: "DocsyIMG",
    description: "Effortless image editing",
    href: "/docsyimg",
  },
  {
    icon: PenTool,
    title: "DocsySign",
    description: "E-signing made simple",
    href: "/docs ysign",
  },
  {
    icon: Code2,
    title: "DocsyAPI",
    description: "Document automation for developers",
    href: "/docsyapi",
  },
];

const applications = [
  {
    icon: Monitor,
    title: "Desktop App",
    description: "Available for Mac and Windows",
    href: "/desktop",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Available for iOS and Android",
    href: "/mobile",
  },
];

const navigationLinks = [
  { icon: CreditCard, title: "Pricing", href: "/pricing" },
  { icon: ShieldCheck, title: "Security", href: "/security" },
  { icon: LayoutGrid, title: "Features", href: "/features" },
  { icon: Heart, title: "About us", href: "/about" },
];

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    // Close the menu with the Escape key
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {/* Menu button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex h-10 w-10 items-center justify-center rounded-md
        text-slate-700 transition-colors hover:bg-slate-100
        dark:text-slate-300 dark:hover:bg-slate-800"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mega menu */}
      {isOpen && (
        <div
          className="absolute right-0 top-full z-50 mt-3
          w-[min(800px,calc(100vw-2rem))] overflow-y-auto
          max-h-[calc(100vh-6rem)] rounded-xl border
          border-slate-200 bg-white shadow-xl
          dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {/* Column 1: Products */}
            <div className="border-b border-slate-100 p-5 sm:border-r dark:border-slate-800">
              <SectionTitle>Other Products</SectionTitle>

              <div className="space-y-5">
                {products.map((product) => (
                  <MenuLink key={product.title} {...product} />
                ))}
              </div>

              <a
                href="/integrations"
                className="mt-7 flex items-center gap-3 rounded-lg
                border border-slate-200 p-3 transition-colors
                hover:bg-slate-50 dark:border-slate-800
                dark:hover:bg-slate-900"
              >
                <Blocks className="h-5 w-5 shrink-0 text-slate-500" />

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Integrations
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Zapier, Make, WordPress...
                  </p>
                </div>
              </a>
            </div>

            {/* Column 2: Solutions and applications */}
            <div className="border-b border-slate-100 p-5 sm:border-r dark:border-slate-800">
              <SectionTitle>Solutions</SectionTitle>

              <a
                href="/solutions/business"
                className="flex items-start gap-3 rounded-lg p-2
                transition-colors hover:bg-slate-50
                dark:hover:bg-slate-900"
              >
                <div className="flex h-12 w-12 shrink-0 items-center
                justify-center rounded-lg bg-red-50 dark:bg-red-950/30">
                  <div className="flex items-end gap-1">
                    <span className="h-4 w-2 rounded-sm bg-red-300" />
                    <span className="h-6 w-2 rounded-sm bg-red-500" />
                    <span className="h-8 w-2 rounded-sm bg-red-600" />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Business
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    AI document generation and workflows for business teams.
                  </p>
                </div>
              </a>

              <SectionTitle className="mt-7">
                Applications
              </SectionTitle>

              <div className="space-y-5">
                {applications.map((application) => (
                  <MenuLink
                    key={application.title}
                    {...application}
                  />
                ))}
              </div>
            </div>

            {/* Column 3: Navigation and settings */}
            <div className="flex flex-col justify-between p-5">
              <nav aria-label="Main navigation" className="space-y-1">
                {navigationLinks.map((link) => (
                  <NavLink key={link.title} {...link} />
                ))}
              </nav>

              <div className="mt-6 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                <ThemeToggle />
                <NavLink
                  icon={HelpCircle}
                  title="Help"
                  href="/help"
                />
                <NavLink
                  icon={Globe}
                  title="Language"
                  href="/language"
                />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

// Reusable section heading
function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`mb-4 text-xs font-bold uppercase tracking-wider text-slate-500 ${className}`}
    >
      {children}
    </h3>
  );
}

// Reusable product or application link
function MenuLink({
  icon: Icon,
  title,
  description,
  href,
}: MenuLinkProps) {
  return (
    <a
      href={href}
      className="group flex items-start gap-3 rounded-lg"
    >
      <div className="flex h-10 w-10 shrink-0 items-center
      justify-center rounded-lg bg-slate-100 text-slate-600
      transition-colors group-hover:bg-red-50 group-hover:text-red-600
      dark:bg-slate-900 dark:text-slate-300 dark:group-hover:bg-red-950/30">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900
        transition-colors group-hover:text-red-600 dark:text-white">
          {title}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </a>
  );
}

// Reusable navigation link
function NavLink({
  icon: Icon,
  title,
  href,
}: NavLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-md px-3 py-2
      text-sm font-medium text-slate-700 transition-colors
      hover:bg-slate-100 hover:text-slate-900
      dark:text-slate-300 dark:hover:bg-slate-900
      dark:hover:text-white"
    >
      <Icon className="h-4 w-4 shrink-0 text-slate-400" />
      <span>{title}</span>
      <ChevronRight className="ml-auto h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}
