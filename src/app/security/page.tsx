import React from "react";
import GetStarted from "@/components/GetStarted";
import ScrollTo from "@/components/ScrollTo";
import QuickLinks from "@/components/QuickLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security | Radvix",
  description: "Radix security page",
};

const scrollItems = [
  { id: "sec-1", label: "Audits & Certifications" },
  { id: "sec-2", label: "Infrastructure and Network Security" },
  { id: "sec-3", label: "Business Continuity and Disaster Recovery" },
  { id: "sec-4", label: "Data Flow" },
  { id: "sec-5", label: "Application Security" },
];

export default function SecurityPage() {
  return (
    <>
      <article className="py-15 text-base leading-8 md:py-22">
        <div className="wrapper">
          <div className="mb-15 text-center">
            <h1 className="lg:text-4xl">
              Security And Compliance <br /> That Your Research Team Can Trust
            </h1>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row xl:gap-25">
            <div className="flex flex-col gap-6 lg:w-[39%] lg:gap-15">
              <ScrollTo scrollItems={scrollItems} />
              <QuickLinks />
            </div>
            <div className="flex flex-col gap-9 lg:w-[61%]">
              {/* ==============  ============== */}
              <div id="sec-1">
                <h4 className="text-xl font-bold">Audits & Certifications</h4>
                <div className="my-[14px] h-px bg-seperator" />
                <h5 className="text-base font-bold text-text-color">
                  SOC 2 Type II:
                </h5>
                <p className="mb-6">
                  Radvix proudly meets the rigorous standards of SOC II Type 2
                  compliance, underscoring our commitment to the highest levels
                  of security and privacy for our users. This compliance
                  signifies that Radvix has been thoroughly evaluated and has
                  demonstrated effective implementation of stringent security
                  policies and procedures, designed to protect the
                  confidentiality, integrity, and availability of our clients’
                  data. Achieving SOC II Type 2 compliance involves ongoing
                  audits and monitoring, ensuring that our practices are not
                  only up to current standards but are also maintained and
                  improved over time.
                </p>
                <p className="mb-6">
                  For our users, this means peace of mind, knowing their
                  valuable research data is handled with the utmost care and
                  protected by industry-leading security measures. You can
                  request our latest SOC 2 audit report by contacting us at{" "}
                  <a
                    href="mailto:support@radvix.com"
                    className="text-primary underline"
                    title="Our support email address"
                  >
                    <span className="sr-only">click here to contact us</span>
                    support@radvix.com
                  </a>
                </p>
                <h5 className="text-base font-bold text-text-color">
                  PCI DSS:
                </h5>
                <p className="mb-6">
                  Radvix uses Stripe to handle payment and card information,
                  which has been audited by an independent PCI Qualified
                  Security Assessor and is certified as a PCI Level 1 Service
                  Provider. This represents the most stringent level of
                  certification available in the payments industry. Radvix does
                  not typically receive credit card data, making it compliant
                  with Payment Card Industry Data Security Standards (PCI DSS)
                  in most cases.
                </p>
                <p>
                  Radvix itself is not designed for the storage of PCI protected
                  data and customers should ensure that they do not use the
                  system in such a way that requires the storage of credit card
                  information.
                </p>
              </div>

              {/* ==============  ============== */}
              <div id="sec-2">
                <h4 className="text-xl font-bold">
                  Infrastructure and Network Security
                </h4>
                <div className="my-[14px] h-px bg-seperator" />
                <p className="mb-6">
                  Radvix entrusts the hosting of customer data to Amazon Web
                  Services (AWS), a provider renowned for its SOC 2 Type 2
                  certification. AWS upholds an extensive array of reports,
                  certifications, and independent evaluations, demonstrating
                  their commitment to maintaining cutting-edge security within
                  their data centers.
                </p>
                <p>
                  The infrastructure supporting Radvix is situated in AWS data
                  centers globally, which are under Amazon’s stringent control.
                  These facilities implement a broad spectrum of physical
                  safeguards designed to thwart unauthorized access, ensuring
                  the utmost security of our customer data. For those seeking
                  detailed insights into the security controls and protocols of
                  AWS data centers, further information is readily available.
                </p>
              </div>

              {/* ==============  ============== */}
              <div id="sec-3">
                <h4 className="text-xl font-bold">
                  Business Continuity and Disaster Recovery
                </h4>
                <div className="my-[14px] h-px bg-seperator" />
                <h5 className="text-base font-bold text-text-color">
                  High Availability:
                </h5>
                <ul className="mb-6 list-decimal ps-5">
                  <li>
                    Every part of Radvix uses automatically provisioned,
                    redundant servers to protect against failure.{" "}
                  </li>
                  <li>
                    Servers are regularly taken in and out of operation
                    throughout the day as part of our routine operation without
                    affecting availability.
                  </li>
                </ul>
                <h5 className="text-base font-bold text-text-color">
                  Business Continuity:
                </h5>
                <ul className="mb-6 list-decimal ps-5">
                  <li>
                    Radvix keeps regular daily and weekly backups of data in
                    multiple geographic locations on Google Cloud Platform.
                  </li>
                  <li>All backups are stored in an encrypted form.</li>
                  <li>
                    In the case of platform-wide production data loss we are
                    able to restore data from these backups.
                  </li>
                  <li>
                    We regularly test our ability to restore our infrastructure
                    from the backups we maintain.
                  </li>
                  <li>
                    We routinely verify the integrity of the backups that we
                    hold.
                  </li>
                </ul>
                <h5 className="text-base font-bold text-text-color">
                  Disaster Recovery:
                </h5>
                <ul className="list-decimal ps-5">
                  <li>
                    Radvix primarily serves traffic from a single geographic
                    region spread across multiple availability zones.
                  </li>
                  <li>
                    In the unlikely event of a prolonged regional outage we
                    maintain a documented procedure for provisioning our
                    deployment environment in a separate region.
                  </li>
                  <li>
                    Radvix has an extensively documented Incident Response
                    process that includes documented procedures for Business
                    Continuity and Disaster Recovery.
                  </li>
                </ul>
              </div>

              {/* ==============  ============== */}
              <div id="sec-4">
                <h4 className="text-xl font-bold">Data Flow</h4>
                <div className="my-[14px] h-px bg-seperator" />
                <p className="mb-6">
                  All customer data is sent to Radvix via HTTPS using TLS 1.2 or
                  above. All Radvix systems are configured to reject connections
                  using TLS version below 1.2 or those using potentially
                  insecure cipher suites. Radvix operates a zero-trust network
                  meaning that all network traffic, even within our own network
                  perimeter, is encrypted.
                </p>
                <p>
                  Radvix regularly tests the availability and security of its
                  SSL configuration using SSL Labs Reporting. The latest report
                  can be viewed here. All requests into the system are logged
                  and monitored using a combination of rule and anomaly-based
                  systems.
                </p>
              </div>

              {/* ==============  ============== */}
              <div id="sec-5">
                <h4 className="text-xl font-bold">Application Security</h4>
                <div className="my-[14px] h-px bg-seperator" />
                <h5 className="text-base font-bold text-text-color">
                  Two-Factor Authentication:
                </h5>
                <p className="mb-6">
                  Radvix provides the option for users to add an additional
                  layer of security to their Radvix account using Time-base One
                  Time Passwords (TOTP). Once enabled Two-Factor Authentication
                  applies to all authentication methods including Single
                  Sign-On.
                </p>
                <h5 className="text-base font-bold text-text-color">
                  Sign In with Google and Microsoft:
                </h5>
                <p className="mb-6">
                  Radvix allows users to login using their Google or Microsoft
                  Accounts.
                </p>
                <h5 className="text-base font-bold text-text-color">
                  SAML 2.0:
                </h5>
                <p className="mb-6">
                  Customers on our Enterprise plans are able to enable
                  SAML-based authentication. Workspaces are optionally able to
                  force all of their users to authenticate using SAML 2.0 to
                  align with their own authentication requirements.
                </p>
                <h5 className="text-base font-bold text-text-color">
                  Penetration Testing:
                </h5>
                <p className="mb-6">
                  Radvix undergoes annual black box penetration testing by an
                  accredited third-party agency. Penetration testers are
                  provided with a high-level diagram of application architecture
                  and tests are run against our hosted production environment.
                </p>
                <p>
                  Information about any security vulnerabilities successfully
                  exploited through penetration testing is used to set
                  mitigation and remediation priorities. Customers on our
                  Enterprise plan can request a summary of our latest
                  penetration test findings by contacting their Account Manager.
                </p>
              </div>
              {/* ==============  ============== */}
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
