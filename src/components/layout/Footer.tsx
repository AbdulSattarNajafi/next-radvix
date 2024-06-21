import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import LogoImage from "@/assets/images/footer-logo.png";

const menuLinks = [
  { href: "team", label: "Our Team" },
  { href: "security", label: "Security" },
  { href: "contact", label: "Contact Us" },
  { href: "privacy-policy", label: "Privacy Policy" },
  { href: "terms-of-services", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-footer-stroke py-12 sm:pb-14 md:pb-[70px] lg:py-5">
      <div className="wrapper xl:flex xl:items-center xl:justify-between">
        <div className="mb-10 flex flex-col items-center lg:gap-10 xl:mb-0 xl:flex-row">
          <div className="shrink-0">
            <Image
              className="inline-block h-auto w-[100px] lg:w-[130px]"
              src={LogoImage}
              alt="Radvix company logo, featuring a modern and clean design that represents the brand identity."
            />
          </div>

          <ul className="mt-6 flex w-full flex-wrap items-center justify-center gap-2.5 sm:justify-between sm:gap-4 md:mt-5 lg:justify-center lg:gap-5 xl:mt-0">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={`/${link.href}`}
                  className="block text-base font-medium text-black transition-all duration-200 hover:text-black/70 sm:text-lg md:text-xl xl:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col-reverse items-center gap-3 xs:flex-row xs:justify-between xs:gap-6 xl:gap-2.5">
          <p className="flex-1 text-center text-[15px] text-text-dark/50 xs:text-left sm:flex-auto">
            Copyright © {new Date().getFullYear()} Radvix Solutions LLC. All
            rights reserved.
          </p>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/radvix/"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-text-dark/50 text-lg text-white transition-all duration-200 hover:bg-text-dark/75 xl:h-5 xl:w-5 xl:text-sm"
            aria-label="Visit our linkedin"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
}
