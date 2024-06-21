import GetStarted from "@/components/GetStarted";
import Story from "./_components/Story";
import Team from "./_components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Radvix",
  description: "Radix team",
};

export default function TeamPage() {
  return (
    <>
      <Team />
      <Story />
      <GetStarted
        title="Simplify Your Research Management with Radvix"
        subtitle="Manage every step of your research projects in one place, from proposal to publication."
      />
    </>
  );
}
