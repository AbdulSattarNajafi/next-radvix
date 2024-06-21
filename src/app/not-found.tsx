import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col items-center pb-10 pt-5 lg:py-15">
          <h1 className="mb-4 text-6xl text-primary">Oops!</h1>
          <h1 className="mb-3 uppercase lg:text-4xl">404 - page not found</h1>
          <p className="mb-8 max-w-xl text-center">
            The page you are looking for might have been removed, had it&apos;s
            name changed or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex h-[55px] items-center justify-center rounded-xl bg-primary px-6 text-xl font-semibold uppercase text-white transition-all duration-200 hover:bg-primary/90"
          >
            Got to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
