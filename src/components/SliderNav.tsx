"use client";

import { ComponentPropsWithoutRef } from "react";
import { Button } from "@nextui-org/react";

type SliderNavProps = ComponentPropsWithoutRef<"button">;

export default function SliderNav({
  children,
  disabled,
  onClick,
  name,
}: SliderNavProps) {
  return (
    <Button
      role="button"
      aria-labelledby="Slider"
      onClick={onClick}
      variant="bordered"
      radius="full"
      isIconOnly
      name={name}
      aria-label={name}
      size="sm"
      disabled={disabled}
      className="h-8 w-8 text-lg text-black/50 hover:border-black hover:text-black disabled:hover:border-[#d4d4d8] disabled:hover:text-black/50 sm:h-[36px] sm:w-[36px]"
    >
      {children}
    </Button>
  );
}
