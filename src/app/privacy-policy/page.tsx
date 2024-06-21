import QuickLinks from "@/components/QuickLinks";
import ScrollTo from "@/components/ScrollTo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radvix | Privacy Policy",
  description: "Radix privacy policy",
};

const scrollItems = [
  { id: "intro", label: "Intro" },
  { id: "applicability", label: "Applicability of This Privacy Policy" },
  { id: "relationship", label: "Our Relationship With You" },
  { id: "information", label: "Information We Collect And Receive" },
  {
    id: "process",
    label: "How We Process Your Information and our Legal Bases for Doing So",
  },
  { id: "aggregated", label: "How We Share and Disclose Information" },
  { id: "data-retention", label: "Data Retention" },
  { id: "privacy-policy", label: "Changes To This Privacy Policy" },
  { id: "data-transfer", label: "International Data Transfers" },
  { id: "your-right", label: "Your Rights" },
  { id: "california-privacy", label: "Your California Privacy Rights" },
  { id: "authority", label: "Data Protection Authority" },
  { id: "radvix", label: "Contacting Radvix" },
];

export default function PrivacyPolicyPage() {
  return (
    <article className="py-15 text-base leading-8 md:py-22">
      <div className="wrapper">
        <div className="mb-15 text-center">
          <h1 className="mb-2.5 lg:text-4xl">Privacy Policy</h1>
          <p className="text-base font-bold">Effective: November 21, 2023</p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row xl:gap-25">
          <div className="flex flex-col gap-6 lg:w-[39%] lg:gap-15">
            <ScrollTo scrollItems={scrollItems} />
            <QuickLinks />
          </div>
          <div className="flex flex-col gap-9 lg:w-[61%]">
            {/* ============== Intro ============== */}
            <div id="intro">
              <p className="mb-6">
                This Privacy Policy describes how Radvix collects, uses, and
                discloses information associated with an identified or
                identifiable individual (referred to in this Privacy Policy as
                <b> “Personal Data”)</b> and what choices you have around this
                activity. If you have any questions, please don’t hesitate to
                contact us.
              </p>
              <p>
                When we refer to <b>“Radvix”</b>, we mean Radvix Solutions LLC,
                as explained in more detail in the “Identifying the Data
                Controller and Processor” section below.
              </p>
            </div>

            {/* ============== Applicability ============== */}
            <div id="applicability">
              <h4 className="text-xl font-bold">
                Applicability of This Privacy Policy
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                This Privacy Policy applies to Radvix’s online collaborative
                platform, including the associated Radvix applications
                (collectively, the <b>“Services”</b>), Radvix.io and other
                Radvix websites (collectively, the <b>“Websites”</b>) and other
                interactions (e.g., customer service inquiries) you may have
                with Radvix. If you do not agree with this Privacy Policy, then
                do not access or use the Services, Websites or any other aspect
                of Radvix’s business. For the avoidance of doubt, this is the
                only privacy policy that applies to Radvix.
              </p>
              <p>
                This Privacy Policy does not apply to any third-party
                applications or software that integrate with the Services
                through the Radvix platform (<b>“Third-Party Services”</b>), or
                any other third-party products, services or businesses who will
                provide their services under their own terms of service and
                privacy policy.
              </p>
            </div>

            {/* ============== Relationship ============== */}
            <div id="relationship">
              <h4 className="text-xl font-bold">Our Relationship With You</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                Radvix is the processor/service provider (a provider that
                processes personal data on behalf of or at the direction of a
                controller, or other similar designation under the law) and our
                customer (usually a company or organization) is the
                controller/business (the entity that decides how and why
                information is processed) of the information provided to Radvix
                via their use of Radvix. In all other cases, Radvix is the
                controller of the information.
              </p>
              <p>For example, if you create an account with </p>

              <ul className="mb-6 list-disc ps-5">
                <li>
                  Your corporate email address, your company is the controller
                  of that information.
                </li>
                <li>
                  A free email domain (like gmail.com) or personal email
                  account, Radvix is the controller.
                </li>
              </ul>

              <p>Radvix can be used by companies or by individual users:</p>
              <p>
                If you’re using Radvix through your company, or with your
                company email address, your company’s own Radvix administrator
                is responsible for the accounts associated with that company or
                institution and can: restrict, suspend, or terminate your access
                to or ability to use the services, access information about you,
                access or retain information stored with us, and restrict your
                ability to edit, restrict, modify, or delete information
                associated with your use of our products and services.
              </p>
            </div>

            {/* ============== Information ============== */}
            <div id="information">
              <h4 className="text-xl font-bold">
                Information We Collect And Receive
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <h5 className="text-base font-bold text-text-color">
                Information Radvix Receives Directly From You
              </h5>
              <p>Information needed to create an account</p>
              <p>
                This includes information that is needed for Radvix to create an
                account for you and manage your ability to log in and out of
                Radvix:
              </p>

              <ul className="my-6 list-disc ps-5">
                <li>
                  Identifiers, such as first and last name and email address
                </li>
                <li>
                  Your password for Radvix (hashed) - unique, long, and strong,
                  please
                </li>
                <li>
                  Information related to a third-party authentication identity
                  provider, such as Google Authenticator
                </li>
              </ul>

              <p>
                If you upgrade your account to a paid account, Radvix may
                collect:
              </p>

              <ul className="mb-6 list-disc ps-5">
                <li>
                  Billing information, such as name, address, and telephone
                  number
                </li>
                <li>
                  Financial information, such as credit card information
                  collected by our payment processors on our behalf
                </li>
                <li>Information about your chosen Radvix plan</li>
              </ul>

              <p>
                Radvix will also collect and receive information through
                operating the Services and Websites, and through other
                interactions with Radvix. Such information will include Customer
                Data and other information and data (“Other Information”) in a
                variety of ways:
              </p>

              <ul className="mt-6 list-disc ps-5">
                <li>
                  Customer Data. Users granted access to the platform routinely
                  submit Customer Data (such as messages, files or other content
                  submitted through Services accounts) to Radvix when using the
                  Services.
                </li>
                <li>
                  Other Information. Radvix also collects, generates and/or
                  receives the following categories of Other Information:
                </li>

                <ul className="my-6 list-disc ps-5">
                  <li>
                    Account information: To create or update your account, you
                    or our Customer (e.g. employer for enterprise users) will
                    supply Radvix with an email address, phone number, and
                    password, and/or other account set up details. In addition,
                    Customers that purchase a paid version of the Services
                    provide Radvix (or its payment processors) with billing
                    details such as credit card information, banking
                    information, and/or a billing address.
                  </li>
                </ul>

                <ul className="my-6 list-disc ps-5">
                  <li>Usage information:</li>
                  <ul className="my-6 list-disc ps-5">
                    <li>
                      Services metadata. When a user interacts with the
                      Services, metadata is generated that provides additional
                      context about the way that a user uses the Services. For
                      example, Radvix logs the Discussion Channels, people,
                      features, content, and links you view or interact with
                      other users, the types of files shared and what
                      Third-Party Services are used (if any).
                    </li>
                    <li>
                      Log data. As with most websites and “Software as a
                      Service” delivered over the Internet, our servers
                      automatically collect information when you access or use
                      our Websites or Services and record it in log files. This
                      log data may include your Internet Protocol (IP) address,
                      the address of the web page you visited before using the
                      Website or Services, browser type and settings, the date
                      and time the Services were used, information about browser
                      configuration and plugins, and your language preferences.
                    </li>
                    <li>
                      Device information. Radvix collects information about
                      devices accessing the Services, including type of device,
                      what operating system is used, device settings,
                      application IDs, unique device identifiers and crash data.
                      Whether we collect some or all of this Other Information
                      often depends on the type of device used and its settings.
                    </li>
                    <li>
                      Location information. We receive information from you, our
                      Customers and other third-parties that helps us
                      approximate your location. We may, for example, use a
                      business address submitted by your employer (for
                      enterprise users) or an IP address received from your
                      browser or device to determine approximate location to
                      assist with localization or for security purposes.
                    </li>
                  </ul>
                </ul>

                <ul className="list-disc ps-5">
                  <li>
                    Cookie information: Radvix uses a variety of cookies and
                    similar technologies in our Websites and Services to help us
                    collect Other Information.
                  </li>
                  <li>
                    Contact information: In accordance with the consent process
                    provided by your device or other third-party API, any
                    contact information that a user chooses to import (such as
                    importing an address book to find coworkers), forward or
                    upload to the Services (for example, when sending emails to
                    the Services) is collected when using the Services.
                  </li>
                  <li>
                    Third-Party data: Radvix may receive data about
                    organizations, industries, lists of companies that are
                    customers, Website visitors, marketing campaigns and other
                    matters related to our business from parent corporation(s),
                    affiliates and subsidiaries, our partners, or others that we
                    use to make our own information better or more useful. This
                    data may be combined with Other Information we collect and
                    might include aggregate-level data, such as which IP
                    addresses correspond to zip codes or countries. Or it might
                    be more specific: for example, how well an online marketing
                    or email campaign performed.
                  </li>
                  <li>
                    Additional information provided to Radvix: We also receive
                    Other Information when submitted to our Websites or in other
                    ways, such as responses or opinions you provide if you
                    participate in a discussion channel, interact with our
                    social media accounts or otherwise communicate with Radvix.
                  </li>
                </ul>
              </ul>
            </div>

            {/* ============== Process ============== */}
            <div id="process">
              <h4 className="text-xl font-bold">
                How We Process Your Information and our Legal Bases for Doing So
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                Customer Data will be used by Radvix in accordance with a
                Customer’s instructions, including to provide the Services, any
                applicable terms in the Terms & Conditions, and as required by
                applicable law. Radvix is a processor of Customer Data and the
                Customer is the controller. Customer may, for example, use the
                Services to grant and remove access to a Discussion Channel,
                configure settings, access, modify, export, share, and remove
                Customer Data, and otherwise apply its policies to the Services.
                Radvix uses Other Information to operate our Services, Websites,
                and business. More specifically, Radvix uses Other Information
                for the following purposes:
              </p>

              <ul className="my-6 list-disc ps-5">
                <li>
                  Maintain, provide, and improve our products and services
                </li>
                <li>
                  Help us better understand user interests and needs, and
                  customize Radvix for you
                </li>
                <li>
                  Analyze and research how you interact with our websites and
                  applications
                </li>
                <li>Protect Radvix and you, for example:</li>
                <ul className="list-disc ps-5">
                  <li>
                    Securing our systems and products against fraud or
                    unauthorized activity
                  </li>
                  <li>
                    Identifying, troubleshooting, and fixing bugs and errors
                  </li>
                  <li>Complying with global laws and regulations.</li>
                </ul>

                <li>
                  Investigate in good faith alleged violations of our Terms &
                  Conditions
                </li>
                <li>
                  Comply in good faith with a valid legal subpoena, request, or
                  other lawful process that we determine is necessary to respond
                  to
                </li>
                <li>
                  If you use Radvix as part of an organization, or company,
                  Radvix will process your information as required by our
                  contract with your organization. Those contractual terms may
                  differ from, and, in the event of a conflict, take precedence
                  over, the uses described in this Privacy Statement.
                </li>
              </ul>

              <p>
                In addition, we use information about your use of Radvix,
                account information (such as your email address and name), and
                information related to third-party integrations to:
              </p>

              <ul className="my-6 list-disc ps-5">
                <li>Communicate with you:</li>
                <ul className="list-disc ps-5">
                  <li>About Radvix by phone, text, email, or chat</li>
                  <li>
                    To provide important notices and updates, product changes,
                    and other necessary notices such as security and fraud
                    alerts
                  </li>
                  <li>
                    To advertise or market Radvix services to you. You have the
                    ability to unsubscribe from promotional communications at
                    any time
                  </li>
                </ul>
                <li>
                  Facilitate reporting and analyze performance of the Radvix
                  platform or features available in Radvix
                </li>
                <li>
                  Demonstrate Radvix or provide you access to a demo Radvix
                  feature instance
                </li>
                <li>Process your information at your direction</li>
                <li>
                  Provide cross-device management of your account. For example,
                  we may locate or try to locate the same unique users across
                  multiple browsers or devices (such as smartphones or tablets),
                  or work with service providers that do this, in order to save
                  your preferences across devices and analyze usage of our
                  products and services. If you wish to opt out of Google’s
                  ability to locate you across devices in this way, you may
                  install the Google Analytics Opt-out Browser Add-on.
                </li>
                <li>Provide you with support and get your feedback</li>
                <li>Respond to your requests for information</li>
                <li>
                  Help identify and troubleshoot any issues with your account
                  and answer your questions
                </li>
                <li>Resolve support requests</li>
                <li>Provide you with reports about usage</li>
                <li>
                  Survey your opinions through surveys, research studies, and
                  questionnaires
                </li>
              </ul>
              <h5 className="text-base font-bold text-text-color">
                Combined Information
              </h5>
              <p>
                Unless otherwise prohibited by law, we may combine the
                information that we collect through your use of our products and
                services with information that we receive from other sources,
                both online and offline, and use that combined information as
                set out above.
              </p>
            </div>

            {/* ============== Aggregated ============== */}
            <div>
              <h4 className="text-xl font-bold">
                Aggregated and de-identified data
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                We may aggregate and/or de-identify information related to your
                use of Radvix so that such information can no longer be linked
                to you or your device. We may use such aggregated and
                de-identified data for any purpose, including but not limited
                to, research and marketing purposes and may also disclose such
                data to any third parties, including advertisers, promotional
                partners, sponsors, event promoters, and/or others.
              </p>
            </div>

            {/* ============== Disclose ============== */}
            <div id="aggregated">
              <h4 className="text-xl font-bold">
                How We Share and Disclose Information
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                This section describes how Radvix may share and disclose
                Information. Customers determine their own policies and
                practices for the sharing and disclosure of Information to third
                parties. Radvix does not control how a Customer or any third
                party chooses to share or disclose Information.
              </p>
              <ul className="mt-6 list-disc ps-5">
                <li>
                  Displaying the Services. When a user submits Information, it
                  may be displayed or discoverable to other users in the same or
                  connected channel. For example, a user’s email address may be
                  displayed with their profile, or other profile and
                  organizational information may be displayed to users. 
                </li>
                <li>
                  Collaborating with Others. The Services provide different ways
                  for users working in independent channels to collaborate, such
                  as Radvix Discussion Channel. Information, such as an user’s
                  profile and organizational information, may be shared. For
                  example, depending on your settings preference, to enable
                  connections with other users, your profile may be shared or
                  searchable or discoverable by users or other users outside of
                  the discussion channel you belong to, or shared via email when
                  you invite an user or other user to collaborate via Radvix. 
                </li>
                <li>
                  Customer access. Owners, administrators, users, and other
                  Customer representatives and personnel may be able to access,
                  modify, or restrict access to Information. This may include,
                  for example, your employer using features of the Services to
                  access or modify your profile details, or to export logs of a
                  channel activity. 
                </li>
                <li>
                  Third-Party service providers and partners. We may engage
                  third-party companies or individuals as service providers or
                  business partners to process Information and support our
                  business. These third parties may, for example, provide
                  virtual computing and storage services, assist Radvix with
                  verifying Owners and Customers, or we may share business
                  information to develop strategic partnerships with Third-Party
                  service providers to support our common customers.
                </li>
                <li>
                  Organizers and sponsors of Events/Webinars. If you attend an
                  event or webinar organized by Radvix, we may share your
                  profile and organizational information with the event or
                  webinar sponsors when you register, have your badge scanned,
                  or join a breakout room. If required by applicable law, you
                  may consent to such sharing via the registration form or by
                  allowing your attendee badge to be scanned at a sponsor booth.
                  In these circumstances, your information will be subject to
                  the sponsors’ privacy statements. For more information, please
                  refer to the terms provided when you register for such an
                  event or webinar.
                </li>
                <li>
                  Professional advisers. We may share your Information with
                  professional advisers acting as service providers, processors,
                  controllers, or joint controllers - including lawyers,
                  bankers, auditors, and insurers who provide consultancy,
                  banking, legal, insurance and accounting services, and to the
                  extent we are legally obliged to share or have a legitimate
                  interest in sharing your Information containing personal data.
                </li>
                <li>
                  Corporate Affiliates. Radvix may share Information with our
                  corporate affiliates, parents and/or subsidiaries.
                </li>
                <li>
                  During a Change to Radvix’s Business. If Radvix engages in a
                  merger, acquisition, bankruptcy, dissolution, reorganization,
                  sale of some or all of Radvix’s assets or stock, financing,
                  public offering of securities, acquisition of all or a portion
                  of our business, a similar transaction or proceeding, or steps
                  in contemplation of such activities, some or all of the
                  Information described in the ‘Information We Collect and
                  Receive’ section may be shared or transferred, subject to
                  standard confidentiality arrangements. 
                </li>
                <li>
                  Law Enforcement and Regulators. If we receive a request for
                  information, we may disclose Other Information if we
                  reasonably believe disclosure is in accordance with or
                  required by any applicable law, regulation or legal process.
                  This may at times include information that Radvix, LLC.
                  processes on behalf of Radvix in its role as a subprocessor,
                  including as pursuant to the terms of any data protection
                  agreement between Radvix and its Customers.
                </li>
                <li>
                  To enforce our rights, prevent fraud, and for safety. To
                  protect and defend the rights, property, or safety of Radvix,
                  its users, or third parties, including enforcing its contracts
                  or policies, or in connection with investigating and
                  preventing illegal activity, fraud, or security issues,
                  including to prevent death or imminent bodily harm.
                </li>
                <li>
                  With Consent. Radvix may share Information with third parties
                  when we have consent to do so or as otherwise permitted in
                  this Privacy Policy. For accounts registered to corporate
                  entities, Radvix may share Information with consent of the
                  account’s primary owner or authorized corporate officer, or
                  their designee. For accounts created without a formal
                  affiliation, Radvix may require user consent. 
                </li>
              </ul>
            </div>

            {/* ============== Retention ============== */}
            <div id="data-retention">
              <h4 className="text-xl font-bold">Data Retention</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <h5 className="text-base font-bold text-text-color">Security</h5>
              <p className="mb-6">
                Radvix takes technical and organizational measures to protect
                your information against accidental or unlawful destruction or
                accidental loss, alteration, unauthorized disclosure or access.
                However, no method of transmission over the Internet and no
                means of electronic or physical storage is absolutely secure, so
                we cannot ensure or warrant the security of that information. We
                are constantly updating and improving our safeguards.
              </p>

              <h5 className="text-base font-bold text-text-color">Storage</h5>
              <p>
                When you use Radvix, some information about you will be stored
                in the United States.Radvix may retain Other Information
                pertaining to you for as long as necessary for the purposes
                described in this Privacy Policy (such as to provide the
                Services, including any optional features you use, and to
                provide customer support). This may include keeping your Other
                Information after you have deactivated your account for the
                period of time needed for Radvix to pursue legitimate business
                interests, conduct audits, comply with (and demonstrate
                compliance with) legal obligations, resolve disputes, and
                enforce our agreements
              </p>
            </div>

            {/* ============== Privacy Policy ============== */}
            <div id="privacy-policy">
              <h4 className="text-xl font-bold">
                Changes To This Privacy Policy
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                Radvix may change this Privacy Policy from time to time. Laws,
                regulations, and industry standards evolve, which may make those
                changes necessary, or we may make changes to our services or
                business. We will post the changes to this page and encourage
                you to review our Privacy Policy to stay informed. If we make
                changes that materially alter your privacy rights, Radvix will
                provide additional notice, such as via email or through the
                Services. If you disagree with the changes to this Privacy
                Policy, you should deactivate your Services account. Contact the
                Customer if you wish to request the removal of Personal Data
                under their control
              </p>
            </div>

            {/* ============== International Data Transfers ============== */}
            <div id="data-transfer">
              <h4 className="text-xl font-bold">
                International Data Transfers
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                Radvix may transfer your Personal Data to countries other than
                the one in which you live, including transfers to the United
                States. To the extent that Personal Data is transferred abroad,
                Radvix will ensure compliance with the requirements of the
                applicable laws in the respective jurisdiction in line with
                Radvix’s obligations.
              </p>
            </div>

            {/* ============== Your Rights ============== */}
            <div id="your-right">
              <h4 className="text-xl font-bold">Your Rights</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                Individuals in the European Economic Area, the United Kingdom,
                Brazil, and across the globe have certain statutory rights in
                relation to their personal data. Subject to any exemptions
                provided by law, you may have the right to request access to
                your personal information, as well as to seek to update, delete,
                or correct this information.
              </p>
              <p>
                To the extent that Radvix’s processing of your Personal Data is
                subject to the General Data Protection Regulation or other
                applicable laws requiring a legal basis for processing Personal
                Data, such as the UK Data Protection Act and the Brazilian
                General Data Protection Act (Lei Geral de Proteção de Dados),
                Radvix primarily relies on its legitimate interests, described
                above, to process your Personal Data. Where we rely on
                legitimate interests to process your Personal Data, you can
                object to that processing by contacting us as described in the
                “Contacting Radvix” section below. In response to your
                objection, we will stop processing your information for the
                relevant purposes unless we have compelling grounds in the
                circumstances or the processing is necessary in the context of
                legal claims. Radvix may also process Other Information that
                constitutes your Personal Data for direct marketing purposes and
                you have a right to object to Radvix’s use of your Personal Data
                for this purpose at any time.
              </p>
            </div>

            {/* ============== Your California Privacy Rights ============== */}
            <div id="california-privacy">
              <h4 className="text-xl font-bold">
                Your California Privacy Rights
              </h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                This section provides additional details about the personal
                information we collect about California consumers and the rights
                afforded to them under the California Consumer Privacy Act or
                “CCPA,” as amended by the California Privacy Rights Act or
                “CPRA”.
              </p>
              <p>
                California law requires that we detail the categories of
                personal information that we collect and disclose for certain
                “business purposes,” such as to service providers that assist us
                with securing our services or marketing our products, and to
                such other entities as described in earlier sections of Privacy
                Policy. In addition to the information provided above in the
                ‘Information We Collect And Receive’ section, we collect the
                following categories of personal information from you, your
                employer, data analytics providers, data brokers, and
                Third-Party Services for our business purposes:
              </p>

              <ul className="my-6 list-disc ps-5">
                <li>Identifiers/contact information;</li>
                <li>Commercial information;</li>
                <li>Internet or electronic network activity information;</li>
                <li>Financial information;</li>
                <li>Geolocation information;</li>
                <li>Professional or employment-related information;</li>
                <li>
                  In limited circumstances where allowed by law, information
                  that may be protected under California or United States law;
                  and
                </li>
                <li>Inferences drawn from any of the above categories.</li>
              </ul>
              <p>
                Radvix does not sell (as such term is defined in the CCPA or
                otherwise) the personal information we collect (and will not
                sell it without providing a right to opt out). We may also share
                personal information (in the form of identifiers and internet
                activity information) with third party advertisers for purposes
                of targeting advertisements on non-Radvix websites,
                applications, and services. In addition, we may allow third
                parties to collect personal information from our sites or
                services if those third parties are authorized service providers
                who have agreed to our contractual limitations as to their
                retention, use, and disclosure of such personal information, or
                if you use our sites or services to interact with third parties
                or direct us to disclose your personal information to third
                parties.Subject to certain limitations, the CCPA provides
                California consumers the right to request to know more details
                about the categories or specific pieces of personal information
                we collect (including how we use, disclose, or may sell this
                information), to delete their personal information, to opt out
                of any “sales”, to know and opt out of sharing of personal
                information for delivering advertisements on non-Radvix
                websites, and to not be discriminated against for exercising
                these rights.
              </p>
            </div>

            {/* ============== Data Protection Authority ============== */}
            <div id="authority">
              <h4 className="text-xl font-bold">Data Protection Authority</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p>
                Subject to applicable law, you also have the right to (i)
                restrict Radvix’s use of Other Information that constitutes your
                Personal Data and (ii) lodge a complaint with your local data
                protection authority. If, however, you believe that we have not
                been able to assist with your complaint or concern, and you are
                located in the European Economic Area or the United Kingdom, you
                have the right to lodge a complaint with the competent
                supervisory authority.
              </p>
            </div>

            {/* ============== Contacting Radvix ============== */}
            <div id="radvix">
              <h4 className="text-xl font-bold">Contacting Radvix</h4>
              <div className="my-[14px] h-px bg-seperator" />
              <p className="mb-6">
                Please also feel free to contact Radvix if you have any
                questions about this Privacy Policy or Radvix’s practices, or if
                you are seeking to exercise any of your statutory rights. Radvix
                will respond within a reasonable timeframe.
              </p>
              <p>
                You may contact us at support@radvix.com or at our mailing
                address below:
              </p>
              <address>
                66 W Flagler Street, Suite 900, PMB 10386 , Miami, FL 33130
              </address>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
