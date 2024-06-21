import GetStarted from "@/components/GetStarted";
import { Metadata } from "next";
import PricingCards from "./_components/PricingCards";

export const metadata: Metadata = {
  title: "Pricing | Radvix",
  description: "Radix team",
};

export default function PricingPage() {
  return (
    <>
      <section className="py-15 text-base leading-8 md:py-22">
        <div className="wrapper">
          <div className="mb-10 text-center">
            <h1 className="lg:text-4xl">
              Pick The Perfect Solution For <br /> Your Research Team
            </h1>
          </div>

          <PricingCards />
        </div>
      </section>
      <GetStarted
        title="Simplify Your Research Management with Radvix"
        subtitle="Manage every step of your research projects in one place, from proposal to publication."
      />
    </>
  );
}
