"use client";

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: { url: string; src: string; alt: string; title: string };
  menu?: MenuItem[];
  mobileExtraLinks?: { name: string; url: string }[];
  auth?: {
    login: { text: string; url: string };
    signup: { text: string; url: string };
  };
}

const defaultMenu: MenuItem[] = [
  { title: "Home", url: "#" },
  {
    title: "Products",
    url: "#",
    items: [
      {
        title: "Blog",
        description: "The latest industry news, updates, and info",
        icon: <Book className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Company",
        description: "Our mission is to innovate and empower the world",
        icon: <Trees className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Careers",
        description: "Browse job listing and discover our workspace",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Support",
        description:
          "Get in touch with our support team or visit our community forums",
        icon: <Zap className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    url: "#",
    items: [
      {
        title: "Help Center",
        description: "Get all the answers you need right here",
        icon: <Zap className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Contact Us",
        description: "We are here to help with any questions",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  { title: "Pricing", url: "#" },
  { title: "Blog", url: "#" },
];

function MenuItems({ menu }: { menu: MenuItem[] }) {
  return (
    <NavigationMenuList>
      {menu.map((item) =>
        item.items ? (
          <NavigationMenuItem
            key={item.title}
            className="text-muted-foreground"
          >
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-80 p-3">
                <NavigationMenuLink>
                  {item.items.map((subItem) => (
                    <li key={subItem.title}>
                      <a
                        className="flex gap-4 rounded-md p-3 transition-colors hover:bg-muted hover:text-accent-foreground"
                        href={subItem.url}
                      >
                        {subItem.icon}
                        <div>
                          <div className="text-sm font-semibold">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <p className="text-sm leading-snug text-muted-foreground">
                              {subItem.description}
                            </p>
                          )}
                        </div>
                      </a>
                    </li>
                  ))}
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <a
            key={item.title}
            className="inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-accent-foreground"
            href={item.url}
          >
            {item.title}
          </a>
        ),
      )}
    </NavigationMenuList>
  );
}

export function Navbar1({
  logo = {
    url: "/",
    src: "/images/Doc_Ai_logo.png",
    alt: "DOC-GEN logo",
    title: "DOC-GEN",
  },
  menu = defaultMenu,
  mobileExtraLinks = [
    { name: "Contact", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" },
  },
}: Navbar1Props) {
  return (
    <section className="border-b py-4">
      <div className="container mx-auto px-4">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="h-8 w-8 object-contain"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <NavigationMenu>
              <MenuItems menu={menu} />
            </NavigationMenu>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={auth.login.url}>{auth.login.text}</a>
            </Button>
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="h-8 w-8 object-contain"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open navigation"
                >
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="h-8 w-8 object-contain"
                        alt={logo.alt}
                      />
                      <span>{logo.title}</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) =>
                      item.items ? (
                        <AccordionItem
                          key={item.title}
                          value={item.title}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent className="mt-2">
                            {item.items.map((subItem) => (
                              <a
                                key={subItem.title}
                                className="flex gap-4 rounded-md p-3 hover:bg-muted"
                                href={subItem.url}
                              >
                                {subItem.icon}
                                <span className="text-sm font-semibold">
                                  {subItem.title}
                                </span>
                              </a>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <a
                          key={item.title}
                          href={item.url}
                          className="font-semibold"
                        >
                          {item.title}
                        </a>
                      ),
                    )}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2">
                      {mobileExtraLinks.map((link) => (
                        <a
                          key={link.name}
                          className="inline-flex h-10 items-center px-4 py-2 text-sm text-muted-foreground hover:bg-muted"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.text}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
