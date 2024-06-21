"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link as UiLink, Button } from "@nextui-org/react";
import { cn } from "@/lib/helpers";
import LogoImage from "@/assets/images/logo.png";
import LogoMobile from "@/assets/images/logo-mobile.png";
import useWindowScroll from "@/hooks/useWindowScroll";
import HeaderMobileMenu from "./HeaderMobileMenu";

const menuLinks = [
  { href: "", label: "Solution" },
  { href: "team", label: "Our Team" },
  { href: "pricing", label: "Pricing" },
  { href: "security", label: "Security" },
  { href: "contact", label: "Contact Us" },
];

const StagingUrl = process.env.NEXT_PUBLIC_URL;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const scrollTop = useWindowScroll();

  function closeMenuHandler() {
    setIsMenuOpen(false);
  }

  const handleLogin = () => {
    if (StagingUrl) {
      router.push(StagingUrl);
    }
    closeMenuHandler();
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-10 border-b border-transparent bg-white transition-[border-color] duration-500 ease-in-out",
        scrollTop > 10 && "border-subtle",
        isMenuOpen && "border-subtle",
      )}
    >
      <nav className="wrapper relative z-50 flex items-center justify-between bg-white py-2.5 lg:py-5">
        <div className="flex items-center gap-10 xl:gap-15">
          <Link href="/" className="" onClick={closeMenuHandler}>
            <Image
              className="hidden max-w-[130px] lg:inline-block"
              src={LogoImage}
              alt="Radvix company logo, featuring a modern and clean design that represents the brand identity."
              priority
            />
            <Image
              className="inline-block max-w-[130px] lg:hidden"
              src={LogoMobile}
              alt="Radvix company logo, featuring a modern and clean design that represents the brand identity."
              priority
            />
          </Link>

          <ul className="hidden items-center gap-4 lg:flex xl:gap-13">
            {menuLinks.map((link) => (
              <li key={link.label} className="block">
                <Link
                  href={`/${link.href}`}
                  className="inline-block text-base font-medium text-zinc-800 transition-all duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden items-center py-[3px] sm:flex sm:py-0">
            <div className="flex items-center gap-4 xl:gap-5">
              <Button
                onClick={handleLogin}
                className="h-auto rounded-xl border-0 px-3.5 py-1 text-base font-medium text-primary"
                variant="bordered"
              >
                Log in
              </Button>
              <Button
                onClick={closeMenuHandler}
                href="/pricing"
                className="h-auto rounded-xl border-0 bg-primary px-3.5 py-1 text-base font-medium text-white"
                variant="bordered"
                as={UiLink}
              >
                Sign Up
              </Button>
            </div>

            <div className="mx-5 h-10 w-px bg-[#d5d5d5]" />

            <Button
              onClick={closeMenuHandler}
              className="hidden h-auto rounded-xl border border-primary px-3.5 py-1 text-base font-medium text-primary sm:flex"
              href="https://meet.radvix.io/"
              target="_self"
              as={UiLink}
              variant="bordered"
            >
              Book a demo
            </Button>
          </div>
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            className={cn(
              "menu-toggler flex h-6 w-6 flex-col justify-between px-px py-0.5 lg:hidden",
              isMenuOpen && "menu-open",
            )}
          >
            <span className="menu-toggler-top"></span>
            <span className="menu-toggler-middle"></span>
            <span className="menu-toggler-bottom"></span>
          </button>
        </div>
      </nav>

      <HeaderMobileMenu
        isMenuOpen={isMenuOpen}
        onClick={closeMenuHandler}
        menuLinks={menuLinks}
        onLogin={handleLogin}
      />
    </header>
  );
}
