import ScrollTo from "@/components/ScrollTo";
import QuickLinks from "@/components/QuickLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radvix | Terms of Services",
  description: "Radix terms of services page",
};

const scrollItems = [
  { id: "1", label: "1. Terms" },
  { id: "2", label: "2. Agreement between User and Radvix" },
  { id: "3", label: "3. Data Privacy" },
  { id: "4", label: "4. Account Registration" },
  { id: "5", label: "5. Minimum Age Provision" },
  { id: "6", label: "6. Electronic Communications" },
  { id: "7", label: "7. Your Account" },
  { id: "8", label: "8. Subscription" },
  { id: "9", label: "9. Radvix’s Two-Way Communication Feature" },
  { id: "10", label: "10. Encryption" },
  { id: "11", label: "11. Links to Third Party Sites/Third Party Services" },
  {
    id: "12",
    label: "12. No Unlawful or Prohibited Use/Intellectual Property",
  },
  { id: "13", label: "13. Use of Communication Services" },
  {
    id: "14",
    label:
      "14. Materials Provided to Radvix or Posted on Any Radvix’s Web Page",
  },
  { id: "15", label: "15. Third Party Accounts" },
  { id: "16", label: "16. International Users" },
  { id: "17", label: "17. Indemnification" },
  { id: "18", label: "18. Arbitration" },
  { id: "19", label: "19. Class Action Waiver" },
  { id: "20", label: "20. Liability Disclaimer" },
  { id: "21", label: "21. Termination/Access Restriction" },
  { id: "22", label: "22. Changes to Terms" },
];

export default function TermsOfServicesPage() {
  return (
    <article className="py-15 text-base leading-8 md:py-22">
      <div className="wrapper">
        <div className="mb-15 text-center">
          <h1 className="lg:text-4xl">Term of Service</h1>
          <p className="mt-2.5 text-base font-bold">
            Effective: November 21, 2023
          </p>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row xl:gap-25">
          <div className="flex flex-col gap-6 lg:w-[39%] lg:gap-15">
            <ScrollTo scrollItems={scrollItems} />
            <QuickLinks />
          </div>

          <div className="flex flex-col gap-9 lg:w-[61%]">
            {/* ============== Terms ============== */}
            <div id="1">
              <h4 className="text-xl font-bold">1. Terms</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                The following are the Terms and Conditions (the “Agreement”)
                which govern your access and use of our online platform
                (collectively the “Platform”). This website is owned and
                operated by Radvix Solutions LLC., (support@radvix.com). The
                Platform may be provided or be accessible via multiple websites
                or applications whether owned and/or operated by us or by third
                parties, including, without limitation, the website Radvix and
                its related apps.
              </p>
              <p className="mb-6">
                By accessing or using the Platform, you are entering into this
                Agreement. You should read this Agreement carefully before
                starting to use the Platform. If you do not agree to be bound to
                any term of this Agreement, you must not access the Platform.
              </p>
              <p className="mb-6">
                When the terms “we”, “us”;, “our” or similar are used in this
                Agreement, they refer to any company that owns and operates the
                Platform (the “Company”).
              </p>
              <p>
                IMPORTANT NOTICE: THIS AGREEMENT IS SUBJECT TO BINDING
                ARBITRATION AND A CLASS ACTION WAIVER AS DETAILED IN SECTION 16.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="2">
              <h4 className="text-xl font-bold">
                2. Agreement between User and Radvix
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                The Radvix website (the “Site”) is comprised of features to
                create a collaborative platform, offered to you conditioned on
                your acceptance without modification of the terms, conditions,
                and notices contained herein (the “Terms”). Your use of Radvix’s
                platform constitutes your agreement to all such Terms. Please
                read these terms carefully, and keep a copy of them for your
                reference.
              </p>
              <p>
                Radvix is a dedicated web application designed to streamline and
                enhance the collaborative efforts of research teams, offering
                tools for project management, data sharing, discussion forums,
                and publication preparation.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="3">
              <h4 className="text-xl font-bold">3. Data Privacy</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                The Platform collects and processes user data in accordance with
                its Privacy Policy. By using the Platform, you consent to the
                collection, storage, and use of your personal information as
                outlined in the Privacy Policy. Your use of Radvix’s platform is
                subject to Radvix’s Privacy Policy. Please review our Privacy
                Policy, which also governs the Site and informs users of our
                data collection practices.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="4">
              <h4 className="text-xl font-bold">4. Account Registration</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                You must create an account to access and use the Platform. You
                are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You must provide accurate and up-to-date information
                during the registration process. You agree to promptly update
                any changes to your information to ensure its accuracy.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="5">
              <h4 className="text-xl font-bold">5. Minimum Age Provision</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                You must be at least 18 years old to use this platform. By
                accessing or using the platform, you confirm that you are over
                18 years of age. If you are under 18 years old, you are
                prohibited from using the platform. If we become aware that you
                are under 18, we reserve the right to terminate your access and
                usage of the platform. By agreeing to these terms, you
                acknowledge and warrant that you meet the minimum age
                requirement for platform usage.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="6">
              <h4 className="text-xl font-bold">
                6. Electronic Communications
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                Visiting www.radvix.com (including any subdomains associated
                with www.radvix.com) or sending emails to Radvix constitutes
                electronic communications. You consent to receive electronic
                communications and you agree that all agreements, notices,
                disclosures and other communications that we provide to you
                electronically, via email and on the Site, satisfy any legal
                requirement that such communications be in writing. Please note
                that we cannot be held liable if the emails sent from us are
                blocked or stopped by your email provider’s firewall. While we
                strive to ensure the successful delivery of all communications,
                factors beyond our control, such as email filtering mechanisms,
                may interfere with the receipt of our emails. We recommend
                reviewing your browser settings to address any concerns
                regarding email filtering or firewall settings.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="7">
              <h4 className="text-xl font-bold">7. Your Account</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                If you use this site, you are responsible for maintaining the
                confidentiality of your account and password and for restricting
                access to your computer, and you agree to accept responsibility
                for all activities that occur under your account or password.
                You may not assign or otherwise transfer your account to any
                other person or entity. You acknowledge that Radvix is not
                responsible for third party access to your account that results
                from theft or misappropriation of your account. Radvix and its
                associates reserve the right to refuse or cancel service,
                terminate accounts, or remove or edit content in our sole
                discretion.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="8">
              <h4 className="text-xl font-bold">8. Subscription</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p></p>
              <ul className="list-decimal ps-5">
                <li className="font-bold">Subscription Services</li>

                <ul className="list-alpha mb-6 ps-5">
                  <li>
                    By accessing and using the platform, you agree to subscribe
                    to the services provided by Radvix (“Subscription Services”)
                    subject to the terms and conditions outlined herein.
                  </li>
                  <li>
                    The Subscription Services provides access to the Platform’s
                    features, functionalities, and content, which are designed
                    to include, but not limited to, facilitate streamline and
                    enhance the collaborative efforts of research teams,
                    offering tools for project management, data sharing,
                    discussion forums, and publication preparation.
                  </li>
                </ul>

                <li className="font-bold">Subscription Terms</li>

                <ul className="list-alpha mb-6 ps-5">
                  <li>
                    Subscription Plans: Radvix offers various subscription
                    plans, which may include free trials, monthly subscriptions,
                    or other packages as determined by Radvix. The details of
                    each subscription plan, including pricing, duration, and
                    available features, will be presented to you during the
                    subscription process.
                  </li>
                  <li>
                    Subscription Fees: The fees associated with the Subscription
                    Services, if applicable, will be clearly communicated to you
                    before you finalize your subscription. You agree to pay the
                    applicable fees in accordance with the selected subscription
                    plan.
                  </li>
                  <li>
                    Payment and Billing: Payment for the Subscription Services
                    will be processed through the designated payment method
                    accepted by Radvix. By providing payment information, you
                    authorize Radvix to charge the specified fees at the agreed
                    intervals (e.g., monthly, annually) for the duration of your
                    subscription.
                  </li>
                  <li>
                    Automatic Renewal: Unless otherwise specified, your
                    subscription will automatically renew at the end of each
                    billing period. You agree that Radvix may automatically
                    charge the applicable fees for the subsequent subscription
                    term unless you cancel your subscription before the renewal
                    date. The renewal charges will be based on the current
                    subscription plan rates.
                  </li>
                </ul>
                <p className="-ms-5">
                  Cancellation and Refunds: You may cancel your subscription at
                  any time through the designated cancellation process provided
                  by Radvix. Please note that subscription fees are
                  non-refundable, and canceling your subscription will prevent
                  any future billing cycles, but it will not entitle you to a
                  refund for the unused portion of your current subscription
                  term. The policy aims to provide fairness in cancellations and
                  empower users to make informed subscription decisions. Please
                  review the following terms regarding our cancellation and
                  refund policies:
                </p>
                <ul className="list-roman my-6 ps-5">
                  <li>
                    Annual plans are eligible for a prorated refund if canceled
                    within the first 30 days, based on the unused portion of the
                    subscription.
                  </li>
                  <li className="font-bold">
                    Monthly plans are not eligible for refunds upon
                    cancellation.
                  </li>
                  <li>
                    Users are encouraged to consider their needs before
                    selecting a plan.
                  </li>
                  <li>
                    Account cancellation will be initiated upon refund request,
                    resulting in immediate loss of access to services.
                  </li>
                  <li>
                    The policy aims to provide fairness in cancellations and
                    empower users to make informed subscription decisions.
                  </li>
                </ul>

                <li className="font-bold">Modification and Termination</li>
                <ul className="list-alpha ps-5">
                  <li>
                    If you upgrade the service and exceed the capacity of your
                    previous plan, you have the option to downgrade at any time.
                    However, please note that you will be charged the full
                    upgraded amount until the next billing cycle.
                  </li>
                  <li>
                    Radvix reserves the right to modify, suspend, or terminate
                    the Subscription Services or any part thereof, at its sole
                    discretion and without prior notice. However, reasonable
                    efforts will be made to notify subscribers in advance of any
                    substantial changes or discontinuation of the Subscription
                    Services.
                  </li>
                  <li>
                    In case of termination by Radvix, you will not be charged
                    for any subsequent billing cycles, and you may be entitled
                    to a refund for any prepaid fees for the unused portion of
                    your current subscription term, subject to Radvix&apos;s
                    refund policy.
                  </li>
                </ul>
              </ul>
            </div>

            {/* ============== ============== */}
            <div id="9">
              <h4 className="text-xl font-bold">
                9. Radvix’s Two-Way Communication Feature
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                The discussion channel feature is specifically designed for
                users to communicate and exchange information within their
                research teams. These discussions may be about, but not limited
                to, specific research tasks, equipment, or data sets.
              </p>
              <h5 className="text-base font-bold text-text-color">
                Team Visibility:
              </h5>
              <p className="mb-6">
                Discussions held within the discussion channel are visible to
                all members of the respective research team who have access to
                the specific items related to the discussion. The purpose is to
                foster effective communication and collaboration within the
                research team.
              </p>
              <h5 className="text-base font-bold text-text-color">
                Confidentiality:
              </h5>
              <p className="mb-6">
                While discussions are visible to team members, it is important
                to recognize that these communications are confined to the
                respective teams and are not public in a broader sense. Users
                should refrain from sharing sensitive or confidential
                information that should not be accessible to their research team
                members.
              </p>
              <h5 className="text-base font-bold text-text-color">
                Responsible Use:
              </h5>
              <p className="mb-6">
                Users are expected to engage in respectful and professional
                discussions within the platform. Any form of harassment,
                offensive language, or inappropriate behavior is strictly
                prohibited. Radvix reserves the right to take appropriate
                action, including the suspension or termination of user
                accounts, for violations of this policy.
              </p>
              <h5 className="text-base font-bold text-text-color">
                Data Protection:
              </h5>
              <p>
                Radvix takes the privacy and security of user data seriously.
                However, users should be aware that discussions within the
                platform are subject to our Privacy Policy and may be accessed
                by Radvix for purposes such as system maintenance, support, or
                compliance with legal obligations.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="10">
              <h4 className="text-xl font-bold">10. Encryption</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                Please be aware that the Radvix platform may not utilize
                encryption for certain features or communications. While we
                prioritize the security and protection of user information, it
                is important to note that encryption measures may not be
                implemented across all aspects of the platform.
              </p>
              <p>
                Therefore, users should exercise caution when sharing sensitive
                or confidential information on the platform. Radvix shall not be
                held liable for any unauthorized access or disclosure of
                information that may occur due to the lack of encryption. By
                using the platform, users acknowledge and accept this limitation
                regarding encryption and are responsible for assessing and
                managing the risk associated with sharing sensitive information
                on the platform.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="11">
              <h4 className="text-xl font-bold">
                11. Links to Third Party Sites/Third Party Services
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                Radvix may contain links to other websites (“Linked Sites”). The
                Linked Sites are not under the control of Radvix and Radvix is
                not responsible for the contents of any Linked Site, including
                without limitation any link contained in a Linked Site, or any
                changes or updates to a Linked Site. Radvix is providing these
                links to you only as a convenience, and the inclusion of any
                link does not imply endorsement by Radvix of the site or any
                association with its operators.
              </p>
              <p>
                Certain services made available via Radvix are delivered by
                third party sites and organizations. By using any product,
                service or functionality originating from the Radvix domain, you
                hereby acknowledge and consent that Radvix may share such
                information and data with any third party with whom Radvix has a
                contractual relationship to provide the requested product,
                service or functionality on behalf of Radvix’s users and
                customers.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="12">
              <h4 className="text-xl font-bold">
                12. No Unlawful or Prohibited Use/Intellectual Property
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                You are granted a non-exclusive, non-transferable, revocable
                license to access and use Radvix’s platform strictly in
                accordance with these terms of use. As a condition of your use
                of the Site, you warrant to Radvix that you will not use the
                Site for any purpose that is unlawful or prohibited by these
                Terms. You may not use the Site in any manner which could
                damage, disable, overburden, or impair the Site or interfere
                with any other party’s use and enjoyment of the Site. You may
                not obtain or attempt to obtain any materials or information
                through any means not intentionally made available or provided
                for through the Site.
              </p>
              <p className="mb-6">
                All content included as part of the Service, such as text,
                graphics, logos, images, as well as the compilation thereof, and
                any software used on the Site, is the property of Radvix or its
                suppliers and protected by copyright and other laws that protect
                intellectual property and proprietary rights. You agree to
                observe and abide by all copyright and other proprietary
                notices, legends or other restrictions contained in any such
                content and will not make any changes thereto.
              </p>
              <p>
                You will not modify, publish, transmit, reverse engineer,
                participate in the transfer or sale, create derivative works, or
                in any way exploit any of the content, in whole or in part,
                found on the Site. Radvix’s content is not for resale. Your use
                of the Site does not entitle you to make any unauthorized use of
                any protected content, and in particular you will not delete or
                alter any proprietary rights or attribution notices in any
                content. You will use protected content solely for your personal
                and/or professional (for subscribers using our Enterprise plan)
                use, and will make no other use of the content without the
                express written permission of Radvix and the copyright owner.
                You agree that you do not acquire any ownership rights in any
                protected content. We do not grant you any licenses, express or
                implied, to the intellectual property of Radvix or our licensors
                except as expressly authorized by these Terms.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="13">
              <h4 className="text-xl font-bold">
                13. Use of Communication Services
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                The Site may contain bulletin board services, chat areas, news
                groups, forums, communities, personal web pages, calendars,
                and/or other message or communication facilities designed to
                enable you to communicate with the public at large or with a
                group (collectively, “Communication Services”). You agree to use
                the Communication Services only to post, send and receive
                messages and material that are proper and related to the
                particular Communication Service.
              </p>
              <p className="mb-6">
                By way of example, and not as a limitation, you agree that when
                using a Communication Service, you will not: defame, abuse,
                harass, stalk, threaten or otherwise violate the legal rights
                (such as rights of privacy and publicity) of others; publish,
                post, upload, distribute or disseminate any inappropriate,
                profane, defamatory, infringing, obscene, indecent or unlawful
                topic, name, material or information; upload files that contain
                software or other material protected by intellectual property
                laws (or by rights of privacy of publicity) unless you own or
                control the rights thereto or have received all necessary
                consents; upload files that contain viruses, corrupted files, or
                any other similar software or programs that may damage the
                operation of another’s computer; advertise or offer to sell or
                buy any goods or services for any business purpose, unless such
                Communication Service specifically allows such messages; conduct
                or forward surveys, contests, pyramid schemes or chain letters;
                download any file posted by another user of a Communication
                Service that you know, or reasonably should know, cannot be
                legally distributed in such manner; falsify or delete any author
                attributions, legal or other proper notices or proprietary
                designations or labels of the origin or source of software or
                other material contained in a file that is uploaded; restrict or
                inhibit any other user from using and enjoying the Communication
                Services; violate any code of conduct or other guidelines which
                may be applicable for any particular Communication Service;
                harvest or otherwise collect information about others, including
                e-mail addresses, without their consent; violate any applicable
                laws or regulations.
              </p>
              <p className="mb-6">
                Radvix has no obligation to monitor the Communication Services.
                However, Radvix reserves the right to review materials posted to
                a Communication Service and to remove any materials in its sole
                discretion. Radvix reserves the right to terminate your access
                to any or all of the Communication Services at any time without
                notice for any reason whatsoever.
              </p>
              <p className="mb-6">
                Radvix reserves the right at all times to disclose any
                information as necessary to satisfy any applicable law,
                regulation, legal process or governmental request, or to edit,
                refuse to post or to remove any information or materials, in
                whole or in part, in Radvix’s sole discretion.
              </p>
              <p className="mb-6">
                Always use caution when giving out any personally identifying
                information about yourself or your children in any Communication
                Service. Radvix does not control or endorse the content,
                messages or information found in any Communication Service and,
                therefore, Radvix specifically disclaims any liability with
                regard to the Communication Services and any actions resulting
                from your participation in any Communication Service. Managers
                and hosts are not authorized Radvix spokespersons, and their
                views do not necessarily reflect those of Radvix’s.
              </p>
              <p>
                Materials uploaded to a Communication Service may be subject to
                posted limitations on usage, reproduction and/or dissemination.
                You are responsible for adhering to such limitations if you
                upload the materials.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="14">
              <h4 className="text-xl font-bold">
                14. Materials Provided to Radvix or Posted on Any Radvix’s Web
                Page
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                No compensation will be paid with respect to the use of your
                Submission, as provided herein. Radvix is under no obligation to
                post or use any Submission you may provide and may remove any
                Submission at any time in Radvix’s sole discretion.
              </p>
              <p>
                By posting, uploading, inputting, providing or submitting your
                Submission you warrant and represent that you own or otherwise
                control all of the rights to your Submission as described in
                this section including, without limitation, all the rights
                necessary for you to provide, post, upload, input or submit the
                Submissions.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="15">
              <h4 className="text-xl font-bold">15. Third Party Accounts</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                You may be able to connect your Radvix account to third party
                accounts. By connecting your Radvix account to your third-party
                account, you acknowledge and agree that you are consenting to
                the continuous release of information about you to others (in
                accordance with your privacy settings on those third-party
                sites). If you do not want information about you to be shared in
                this manner, do not use this feature.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="16">
              <h4 className="text-xl font-bold">16. International Users</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                The Service is controlled, operated and administered by Radvix
                from our offices within the Florida, USA. If you access the
                Service from a location outside the USA, you are responsible for
                compliance with all local laws. You agree that you will not use
                the Radvix’s Content accessed through{" "}
                <a
                  href="www.radvix.com"
                  className="text-primary underline"
                  target="_blank"
                >
                  www.radvix.com
                </a>
                , or any Radvix subdomain, in any country or in any manner
                prohibited by any applicable laws, restrictions or regulations.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="17">
              <h4 className="text-xl font-bold">17. Indemnification</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                You agree to indemnify, defend and hold harmless Radvix, its
                officers, directors, employees, agents and third parties, for
                any losses, costs, liabilities and expenses (including
                reasonable attorney’s fees) relating to or arising out of your
                use of or inability to use the Site or services, any user
                postings made by you, your violation of any terms of this
                Agreement or your violation of any rights of a third party, or
                your violation of any applicable laws, rules or regulations.
                Radvix reserves the right, at its own cost, to assume the
                exclusive defense and control of any matter otherwise subject to
                indemnification by you, in which event you will fully cooperate
                with Radvix in asserting any available defenses.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="18">
              <h4 className="text-xl font-bold">18. Arbitration:</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                In the event the parties are not able to resolve any dispute
                between them arising out of or concerning these Terms and
                Conditions, or any provisions hereof, whether in contract, tort,
                or otherwise at law or in equity for damages or any other
                relief, then such dispute shall be resolved only by final and
                binding arbitration pursuant to the Federal Arbitration Act,
                conducted by a single neutral arbitrator and administered by the
                American Arbitration Association, or a similar arbitration
                service selected by the parties, in a location mutually agreed
                upon by the parties. The arbitrator’s award shall be final, and
                judgment may be entered upon it in any court having
                jurisdiction. In the event that any legal or equitable action,
                proceeding or arbitration arises out of or concerns these Terms
                and Conditions, the prevailing party shall be entitled to
                recover its costs and reasonable attorney’s fees. The parties
                agree to arbitrate all disputes and claims in regards to these
                Terms and Conditions or any disputes arising as a result of
                these Terms and Conditions, whether directly or indirectly,
                including Tort claims that are a result of these Terms and
                Conditions. The parties agree that the Federal Arbitration Act
                governs the interpretation and enforcement of this provision.
                The entire dispute, including the scope and enforceability of
                this arbitration provision shall be determined by the
                Arbitrator. This arbitration provision shall survive the
                termination of these Terms and Conditions.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="19">
              <h4 className="text-xl font-bold">19. Class Action Waiver</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                Any arbitration under these Terms and Conditions will take place
                on an individual basis; class arbitrations and
                class/representative/collective actions are not permitted. THE
                PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER
                ONLY IN EACH’S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR
                CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR
                REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE
                ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both
                you and Radvix agree otherwise, the arbitrator may not
                consolidate more than one person’s claims, and may not otherwise
                preside over any form of a representative or class proceeding.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="20">
              <h4 className="text-xl font-bold">20. Liability Disclaimer</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
                AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR
                TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
                INFORMATION HEREIN. RADVIX AND/OR ITS SUPPLIERS MAY MAKE
                IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
              </p>
              <p className="mb-6">
                RADVIX AND/OR ITS AFFILIATES MAKE NO REPRESENTATIONS ABOUT THE
                SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY
                OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED
                GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM
                EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION,
                SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED
                “AS IS” WITHOUT WARRANTY OR CONDITION OF ANY KIND. RADVIX AND/OR
                ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH
                REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND
                RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND
                NON-INFRINGEMENT.
              </p>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL RADVIX AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT,
                INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES
                OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES
                FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY
                CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE
                DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE
                PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY
                INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
                OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE
                OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
                LIABILITY OR OTHERWISE, EVEN IF RADVIX OR ANY OF ITS SUPPLIERS
                HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME
                STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE
                LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH
                ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR
                SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="21">
              <h4 className="text-xl font-bold">
                21. Termination/Access Restriction
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                Radvix reserves the right, in its sole discretion, to terminate
                your access to the Site and the related services or any portion
                thereof at any time, without notice. To the maximum extent
                permitted by law, this agreement is governed by the laws of the
                Florida and you hereby consent to the exclusive jurisdiction and
                venue of courts in California in all disputes arising out of or
                relating to the use of the Site. Use of the Site is unauthorized
                in any jurisdiction that does not give effect to all provisions
                of these Terms, including, without limitation, this section.
              </p>
              <p className="mb-6">
                You agree that no joint venture, partnership, employment, or
                agency relationship exists between you and Radvix as a result of
                this agreement or use of the Site. Radvix’s performance of this
                agreement is subject to existing laws and legal process, and
                nothing contained in this agreement is in derogation of Radvix’s
                right to comply with governmental, court and law enforcement
                requests or requirements relating to your use of the Site or
                information provided to or gathered by Radvix with respect to
                such use. If any part of this agreement is determined to be
                invalid or unenforceable pursuant to applicable law including,
                but not limited to, the warranty disclaimers and liability
                limitations set forth above, then the invalid or unenforceable
                provision will be deemed superseded by a valid, enforceable
                provision that most closely matches the intent of the original
                provision and the remainder of the agreement shall continue in
                effect.
              </p>
              <p>
                Unless otherwise specified herein, this agreement constitutes
                the entire agreement between the user and Radvix with respect to
                the Site and it supersedes all prior or contemporaneous
                communications and proposals, whether electronic, oral or
                written, between the user and Radvix with respect to the Site. A
                printed version of this agreement and of any notice given in
                electronic form shall be admissible in judicial or
                administrative proceedings based upon or relating to this
                agreement to the same extent and subject to the same conditions
                as other business documents and records originally generated and
                maintained in printed form. It is the express wish to the
                parties that this agreement and all related documents be written
                in English.
              </p>
            </div>

            {/* ============== ============== */}
            <div id="22">
              <h4 className="text-xl font-bold">22. Changes to Terms</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                Radvix reserves the right, in its sole discretion, to change the
                Terms under which Radvix is offered. The most current version of
                the Terms will supersede all previous versions. Radvix
                encourages you to periodically review the Terms to stay informed
                of our updates.
              </p>
            </div>
            {/* ============== ============== */}
          </div>
        </div>
      </div>
    </article>
  );
}
