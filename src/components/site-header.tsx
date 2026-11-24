"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/projects";

const navItems = [
  { href: "/#projects", label: "프로젝트" },
  { href: "/#stack", label: "스택" },
  { href: "/#about", label: "소개" },
  { href: "/#contact", label: "연락" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-sm font-medium">
          {profile.name}
        </Link>
        <nav aria-label="섹션" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="outline"
          className="h-9 px-3 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "메뉴 닫기" : "메뉴 열기"}</span>
        </Button>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="섹션" className="border-t border-border px-5 py-3 lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 text-sm" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
