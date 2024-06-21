import GetStarted from "@/components/GetStarted";
import Best from "./_components/Best";
import Detail from "./_components/Detail";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Security from "./_components/Security";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Detail />
      <Best />
      <Security />
      <GetStarted
        title="Simplify Your Research Management with Radvix"
        subtitle="Manage every step of your research projects in one place, from proposal to publication."
      />
    </>
  );
}
