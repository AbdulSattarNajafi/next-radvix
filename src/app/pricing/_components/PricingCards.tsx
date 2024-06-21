"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PricingCard from "./PricingCard";
import { Link as UiLink, Button } from "@nextui-org/react";

const LaunchpadPonts = [
  { label: "Free forever" },
  { label: "Single user structure" },
  { label: "Up to 3 projects" },
  { label: "Unlimited tasks" },
  { label: "Unlimited messages" },
  { label: "Unlimited datasets" },
  { label: "Unlimited equipment" },
  { label: "1 GB file storage (128 MB per file)" },
];
const collaboratorPonts = [
  { label: "Collaborate with up to 500 teammates" },
  { label: "Unlimited Projects" },
  { label: "Connect with collaborator workspaces" },
  { label: "5 TB file storage (128 MB per file)" },
  { label: "Equipment booking and scheduler" },
  { label: "Timeline view" },
  { label: "Access to Radvix AI assistant" },
];
const enterprisePonts = [
  { label: "Unlimited seats." },
  { label: "Custom feature development" },
  { label: "SAML" },
  { label: "Enterprise Console Access" },
  { label: "Premium support" },
  { label: "Virtual and in-person workshops" },
  { label: "White labeling" },
];

const StagingUrl = process.env.NEXT_PUBLIC_URL;

export default function PricingCards() {
  const [isAnnualPrice, setIsAnnualPrice] = useState(true);
  const router = useRouter();

  const handleSignup = () => {
    if (StagingUrl) {
      router.push(`${StagingUrl}/Signup/`);
    }
  };

  return (
    <>
      <div className="mb-15 flex items-center justify-center gap-4">
        <p className="text-base font-semibold text-zinc-800">Annual</p>
        <div className="h-6">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              id="switch"
              type="checkbox"
              className="peer sr-only"
              onChange={() => setIsAnnualPrice((prv) => !prv)}
            />
            <label htmlFor="switch" className="hidden"></label>
            <div className="peer h-6 w-11 rounded-full border bg-primary after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
          </label>
        </div>
        <p className="text-base font-semibold text-zinc-800">Monthly</p>
      </div>

      <div className="flex justify-center">
        <div className="grid w-full max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2.5">
          <PricingCard
            title="Launchpad"
            subtitle="Best for individual researchers."
            price="Free"
            benefits={LaunchpadPonts}
          >
            <div className="pb-2.5 pt-3">
              <Button
                variant="bordered"
                className="h-[33px] w-full rounded-xl border-primary text-base font-medium text-primary"
                onClick={handleSignup}
              >
                Sign Up Now
              </Button>
            </div>
          </PricingCard>
          <PricingCard
            title="Collaborator"
            subtitle="Best for medium to large research collaborations."
            price={isAnnualPrice ? "$29.75" : "$35"}
            priceDescription={`/Seat/Month - Billed  ${isAnnualPrice ? "Annually" : "Monthly"}`}
            benefitsTitle="Everything in Launchpad, plus :"
            benefits={collaboratorPonts}
            isSelected={true}
            badge={isAnnualPrice ? "15% OFF" : null}
          >
            <div className="pb-2.5 pt-4">
              <Button
                className="h-[33px] w-full rounded-xl border-primary bg-primary text-base font-medium text-white"
                onClick={handleSignup}
              >
                Get Started for Free
              </Button>
            </div>
          </PricingCard>
          <PricingCard
            title="Enterprise"
            subtitle="Best for medium to large research collaborations."
            price="Let's Talk"
            benefitsTitle="Everything in Collaborator, plus"
            benefits={enterprisePonts}
          >
            <div className="pb-2.5 pt-4">
              <Button
                variant="bordered"
                className="h-[33px] w-full rounded-xl border-primary text-base font-medium text-primary"
                href="https://meet.radvix.io/"
                target="_self"
                as={UiLink}
              >
                Contact Sales
              </Button>
            </div>
          </PricingCard>
        </div>
      </div>
    </>
  );
}
