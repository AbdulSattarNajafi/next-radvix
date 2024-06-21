"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as UiLink, Button } from "@nextui-org/react";

import { cn } from "@/lib/helpers";

type HeaderMobileMenuProps = {
  isMenuOpen: boolean;
  onClick: () => void;
  menuLinks: { href: string; label: string }[];
  onLogin: () => void;
};

export default function HeaderMobileMenu({
  isMenuOpen,
  onClick,
  menuLinks,
  onLogin,
}: HeaderMobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "absolute left-0 top-[77px] z-10 w-full -translate-y-[104%] bg-white px-5 transition-transform duration-300 md:px-10 lg:hidden",
        isMenuOpen && "translate-y-0 shadow",
      )}
    >
      <ul className="flex flex-col gap-6 pb-10 pt-5">
        {menuLinks.map((link) => (
          <li key={link.label} className="block">
            <Link
              onClick={onClick}
              href={`/${link.href}`}
              className="inline-block text-base font-medium text-zinc-800 transition-all duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="flex w-full items-center gap-5 px-2 sm:hidden">
          <Button
            onClick={onLogin}
            className="h-auto w-1/2 rounded-xl border border-primary px-3.5 py-[7px] text-lg font-semibold text-primary"
            variant="bordered"
          >
            Log in
          </Button>
          <Button
            onClick={onClick}
            href="/pricing"
            className="h-auto w-1/2 rounded-xl border border-primary bg-primary px-3.5 py-[7px] text-lg font-semibold text-white"
            variant="bordered"
            as={UiLink}
          >
            Sign Up
          </Button>
        </li>
        <li className="w-full sm:hidden">
          <Button
            onClick={onClick}
            className="h-auto w-full rounded-xl border border-primary px-3.5 py-[7px] text-lg font-semibold text-primary"
            href="https://meet.radvix.io/"
            target="_self"
            as={UiLink}
            variant="bordered"
          >
            Book a demo
          </Button>
        </li>
      </ul>
    </div>
  );
}
