"use client";

import { cn } from "@/lib/helpers";

type ButtonVariant = "primary" | "secondary";

type SliderButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  label: string;
  isActive: boolean;
  variant?: ButtonVariant;
};

const variantClasses: Record<
  ButtonVariant,
  { base: string; active: string; iconClass: string; iconActive: string }
> = {
  primary: {
    base: "group gap-1.5 p-1.5 sm:hover:bg-primary sm:hover:text-white",
    active: "sm:bg-primary sm:text-white",
    iconClass: "group-hover:text-white",
    iconActive: "sm:text-white",
  },
  secondary: {
    base: "gap-2.5 border border-transparent px-3 sm:hover:border-stroke sm:hover:bg-white md:px-4",
    active: "xs:border-stroke xs:bg-white",
    iconClass: "",
    iconActive: "",
  },
};

export default function SliderButton({
  children,
  label,
  isActive,
  variant = "primary",
  onClick,
}: SliderButtonProps) {
  const { base, active, iconClass, iconActive } = variantClasses[variant];

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-[38px] items-center justify-center rounded-[7px] bg-transparent font-roboto text-base font-medium text-text-secondary transition-all duration-200",
        base,
        isActive && active,
      )}
    >
      <span
        className={cn(
          "flex h-6 w-6 max-w-6 shrink-0 items-center justify-center text-black transition-all duration-150",
          iconClass,
          isActive && iconActive,
        )}
      >
        {children}
      </span>
      <span className="block">{label}</span>
    </button>
  );
}
