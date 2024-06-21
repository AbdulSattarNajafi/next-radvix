import GetStarted from "@/components/GetStarted";
import ContactForm from "./_components/ContactForm";
import ScrollTo from "@/components/ScrollTo";
import QuickLinks from "@/components/QuickLinks";
import { Metadata } from "next";
import { PiEnvelopeLight } from "react-icons/pi";
import { Mailing } from "@/assets/icons/Icons";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact | Radvix",
  description: "Radix contact page",
};

const scrollItems = [
  { id: "contact-1", label: "Audits & Contact Form" },
  { id: "contact-2", label: "Send Us Email" },
  { id: "contact-3", label: "Mailing Address" },
];

export default function ContactPage() {
  return (
    <>
      <article className="py-15 text-base leading-8 md:py-22">
        <div className="wrapper">
          <div className="mb-15 text-center">
            <h1 className="lg:text-4xl">Contact Us</h1>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row xl:gap-25">
            <div className="hidden flex-col gap-15 lg:flex lg:w-[39%]">
              <ScrollTo scrollItems={scrollItems} />
              <QuickLinks />
            </div>
            <div className="flex flex-col gap-9 lg:w-[61%]">
              {/* ==============  ============== */}
              <div id="contact-1">
                <h4 className="text-xl font-bold">Contact Form</h4>
                <div className="my-[14px] h-px bg-seperator" />
                <Suspense fallback={<p>Loading...</p>}>
                  <ContactForm />
                </Suspense>
              </div>

              {/* ==============  ============== */}
              <div id="contact-2">
                <div className="flex items-center gap-2">
                  <PiEnvelopeLight className="h-[26px] w-[26px] text-zinc-800" />
                  <h4 className="text-xl font-bold">Send Us Email</h4>
                </div>
                <div className="my-[14px] h-px bg-seperator" />

                <div className="rounded-[10px] border border-blue-200 bg-blue-50 p-5 md:p-10">
                  <p className="mb-6">
                    If you would like to reach out to us for any sales or
                    support related requests, please send an email to&nbsp;
                    <a
                      href="mailto:support@radvix.com"
                      className="font-bold underline"
                    >
                      support@radvix.com
                    </a>
                  </p>

                  <p>
                    In case you would like to directly reach out to the founding
                    team, you can send an email to&nbsp;
                    <a
                      href="mailto:nima@radvix.com"
                      className="font-bold underline"
                    >
                      nima@radvix.com
                    </a>
                  </p>
                </div>
              </div>

              {/* ==============  ============== */}
              <div id="contact-1">
                <div className="flex items-center gap-2">
                  <Mailing />

                  <h4 className="text-xl font-bold">Mailing Address</h4>
                </div>
                <div className="my-[14px] h-px bg-seperator" />

                <div className="rounded-[10px] border border-blue-200 bg-blue-50 p-5 md:p-10">
                  <p>
                    Our company is based in United States and operated from
                    Florida. You can find our mailing address below:
                  </p>
                  <address className="mt-1 text-base font-bold">
                    66 W Flagler Street, Suite 900, PMB 10386 , Miami, FL 33130
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <GetStarted
        title="Simplify Your Research Management with Radvix"
        subtitle="Manage every step of your research projects in one place, from proposal to publication."
      />
    </>
  );
}
