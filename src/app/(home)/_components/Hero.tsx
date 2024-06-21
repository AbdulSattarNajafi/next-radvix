import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/images/home-hero.png";
import HeroMobile from "@/assets/images/hero-mobile.png";

export default function Hero() {
  return (
    <section className="relative h-auto overflow-hidden">
      <div className="wrapper">
        <div className="py-15 text-center sm:py-10 md:py-15">
          <h1 className="mx-auto w-full max-w-4xl">
            The First Project Management Tool Made For Researchers
          </h1>
          <p className="my-6 font-light lg:font-normal">
            With Radvix, manage every step of your research projects in one
            place, from proposal to publication
          </p>
          <div className="flex justify-center">
            <Link
              href="/pricing"
              className="flex h-[55px] w-60 items-center justify-center rounded-xl bg-primary text-xl font-semibold text-white transition-all duration-200 hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="-mb-0.5 text-center md:pt-2.5 lg:pt-4">
          <Image
            className="hidden md:inline-block"
            priority
            src={HeroImage}
            alt="Radvix dashboard displaying recent updates and tasks for the project 'Enhancing Durability of Cementitious Materials,' with user messages, task assignments, data uploads, and equipment updates. The dashboard includes filters for different project components like research, team, laboratory, task, data, chat, write & publish, financials, and ticketing, all in one glance."
          />
          <Image
            className="inline-block md:hidden"
            priority
            src={HeroMobile}
            alt="Radvix dashboard displaying recent updates and tasks for the project 'Enhancing Durability of Cementitious Materials,' with user messages, task assignments, data uploads, and equipment updates. The dashboard includes filters for different project components like research, team, laboratory, task, data, chat, write & publish, financials, and ticketing, all in one glance."
          />
        </div>
      </div>
      <div className="bg-red-2003 absolute bottom-0 left-0 h-16 w-full shadow-hero-shadow"></div>
    </section>
  );
}
