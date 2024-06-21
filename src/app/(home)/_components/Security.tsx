import Image from "next/image";
import Link from "next/link";
import SecurityImage from "@/assets/images/security.png";

export default function Security() {
  return (
    <article className="py-10 lg:py-22">
      <div className="wrapper">
        <div className="lg:flex lg:justify-center">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-15">
            <div className="w-full text-center lg:w-[263px] lg:text-left">
              <Image
                className="inline-block max-w-[263px]"
                src={SecurityImage}
                alt="Illustration depicting the Radvix logo at the center, surrounded by icons representing various elements: researchers, Amazon Web Services (AWS) logo, and SOC 2 Type 2 compliance badge. The researchers are shown in lab coats, highlighting collaboration and data security within the Radvix platform."
              />
            </div>
            <div className="mt-7 lg:mt-0 lg:flex lg:flex-1">
              <div className="w-full text-center lg:max-w-[665px] lg:text-left">
                <h2 className="mb-6">Security & Compliance</h2>
                <p className="mb-8 text-base">
                  Security and Compliance represent key aspects of any product
                  your research team uses. Radvix is committed to securing
                  access to your data, eliminating systems vulnerabilities and
                  ensuring continuity of access.
                </p>
                <Link
                  href="/security"
                  className="inline-flex h-[55px] items-center justify-center rounded-xl bg-primary px-4 text-xl font-semibold text-white transition-all duration-200 hover:bg-primary/90"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
