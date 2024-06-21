"use client";

import { cn } from "@/lib/helpers";
import { Link } from "react-scroll";

type ScrollToProps = {
  scrollItems: { id: string; label: string }[];
};

export default function ScrollTo({ scrollItems }: ScrollToProps) {
  return (
    <div className="rounded-lg bg-[#FAFAFA] px-5 py-1 md:px-6 lg:px-[30px]">
      <ul>
        {scrollItems.map((item, i) => (
          <li
            className={cn(
              "block border-t border-seperator",
              i === 0 && "border-t-0",
            )}
            key={item.id}
          >
            <Link
              className="block cursor-pointer py-[15px] text-base font-semibold text-zinc-800 transition-all duration-300 hover:text-primary"
              to={item.id}
              smooth={true}
              offset={-140}
              duration={500}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
