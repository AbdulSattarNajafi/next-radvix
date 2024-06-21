"use client";

import { CheckedIcon, CheckedIconDark } from "@/assets/icons/Icons";
import { cn } from "@/lib/helpers";
import { ReactNode, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

type PricingCardProps = {
  title: string;
  subtitle: string;
  price: string;
  benefitsTitle?: string;
  benefits: { label: string }[];
  children: ReactNode;
  priceDescription?: string;
  isSelected?: boolean;
  badge?: string | null;
};

export default function PricingCard({
  title,
  subtitle,
  price,
  priceDescription,
  benefitsTitle,
  benefits,
  children,
  isSelected,
  badge,
}: PricingCardProps) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className={cn(
        "rounded-[10px] border border-seperator p-5",
        isSelected && "bg-blue-50",
      )}
    >
      <div className="min-h-[94px] border-b border-stroke pb-4 pe-4">
        <h3 className="mb-2.5 text-lg font-bold text-[#1C2024]">{title}</h3>
        <p className="text-sm text-[#1C2024]">{subtitle}</p>
      </div>

      <div className="py-5">
        <div className="mb-1 flex items-center gap-1">
          <h4 className="text-3xl font-bold uppercase text-primary">{price}</h4>
          {badge && (
            <span className="inline-block rounded-[5px] border border-blue-400 bg-blue-100 px-[5px] text-sm font-semibold text-[#002E62]">
              {badge}
            </span>
          )}
        </div>
        <p className="h-5 text-[14px] leading-5 text-[#71717A]">
          {priceDescription}
        </p>

        <ul
          className={cn(
            "mt-6 flex flex-col gap-[15px] overflow-hidden transition-all duration-300",
            collapsed && "h-[86px] md:h-auto",
          )}
        >
          {benefitsTitle && (
            <p className="flex-1 text-[12px] font-semibold leading-4 text-[#1C2024]">
              {benefitsTitle}
            </p>
          )}
          {benefits.map((item, index) => (
            <li key={index} className="flex items-center gap-2.5">
              <span className="inline-block shrink-0">
                {isSelected ? <CheckedIconDark /> : <CheckedIcon />}
              </span>
              <p className="flex-1 text-[12px] leading-4 text-[#1C2024]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setCollapsed((prevSt) => !prevSt)}
          className="mt-4 flex w-[136px] items-center gap-[10px] py-1.5 text-[12px] font-bold leading-4 text-zinc-800 md:hidden"
        >
          <span className="block flex-1 text-left">
            See {collapsed ? "more" : "less"} features
          </span>
          <span
            className={cn(
              "-mb-px inline-block -rotate-180 transition-all duration-100",
              collapsed && "rotate-0",
            )}
          >
            <IoChevronDownSharp className="text-lg" />
          </span>
        </button>
      </div>

      {children}
    </div>
  );
}
