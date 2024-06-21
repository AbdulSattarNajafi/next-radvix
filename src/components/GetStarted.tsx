import { Button, Link as UiLink } from "@nextui-org/react";
import Link from "next/link";

type GetStartedProps = {
  title: string;
  subtitle: string;
};

export default function GetStarted({ title, subtitle }: GetStartedProps) {
  return (
    <section className="mb-2.5 py-5 md:mb-0 lg:py-10">
      <div className="wrapper">
        <div className="rounded-4xl bg-blue-light px-2 py-10 sm:px-5 md:py-15">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-center">
            <h2>{title}</h2>
            <p className="text-base">{subtitle}</p>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="grid w-full max-w-[294px] grid-cols-1 gap-6 sm:max-w-[500px] sm:grid-cols-2 sm:flex-row">
              <Link
                href="/pricing"
                className="flex h-[55px] items-center justify-center rounded-xl border-0 bg-primary text-xl font-semibold text-white"
              >
                Get started now
              </Link>
              <Button
                className="h-[55px] rounded-xl border-primary text-xl font-semibold text-primary"
                href="https://meet.radvix.io/"
                target="_self"
                as={UiLink}
                variant="bordered"
              >
                Book a demo call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
