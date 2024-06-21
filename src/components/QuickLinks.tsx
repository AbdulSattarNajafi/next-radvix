import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function QuickLinks() {
  return (
    <ul className="flex flex-col gap-[15px] px-2.5 py-5">
      <li>
        <Link
          href="/privacy-policy"
          className="flex items-center gap-4 rounded-[10px] border border-seperator px-5 py-2.5 text-base font-semibold text-zinc-800 transition-all duration-250 hover:text-primary"
        >
          <p className="flex-1">Privacy Policy</p>
          <HiOutlineArrowRight className="h-6 w-6 text-primary" />
        </Link>
      </li>
      <li>
        <Link
          href="/terms-of-services"
          className="flex items-center gap-4 rounded-[10px] border border-seperator px-5 py-2.5 text-base font-semibold text-zinc-800 transition-all duration-250 hover:text-primary"
        >
          <p className="flex-1">Terms of Service</p>
          <HiOutlineArrowRight className="h-6 w-6 text-primary" />
        </Link>
      </li>
      <li>
        <Link
          href="/security"
          className="flex items-center gap-4 rounded-[10px] border border-seperator px-5 py-2.5 text-base font-semibold text-zinc-800 transition-all duration-250 hover:text-primary"
        >
          <p className="flex-1">Security</p>
          <HiOutlineArrowRight className="h-6 w-6 text-primary" />
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="flex items-center gap-4 rounded-[10px] border border-seperator px-5 py-2.5 text-base font-semibold text-zinc-800 transition-all duration-250 hover:text-primary"
        >
          <p className="flex-1">Contact Us</p>
          <HiOutlineArrowRight className="h-6 w-6 text-primary" />
        </Link>
      </li>
    </ul>
  );
}
