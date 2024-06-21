"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const StagingUrl = process.env.NEXT_PUBLIC_URL;

export default function GetStartedButton() {
  const router = useRouter();

  const handleSignup = () => {
    if (StagingUrl) {
      router.push(`${StagingUrl}/Signup/`);
    }
  };

  return (
    <Button
      className="h-[55px] rounded-xl border-0 bg-primary text-xl font-semibold text-white"
      onClick={handleSignup}
      variant="bordered"
    >
      Get started for free
    </Button>
  );
}
