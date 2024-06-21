import Image from "next/image";
import NimaImage from "@/assets/images/nima-hosseinzadeh.png";
import NimaT from "@/assets/images/nima-t.png";
import NimaM from "@/assets/images/nima-m.png";

export default function Story() {
  return (
    <article className="mb-2.5 py-10 md:mb-0 md:py-15 lg:py-22">
      <div className="wrapper">
        <div className="lg:mt-0 lg:items-center lg:gap-8 xl:flex xl:gap-25">
          <div className="flex justify-center">
            <div className="mb-25 text-center xl:mb-0 xl:w-[566px]">
              <Image
                src={NimaImage}
                alt="Photo of Nima Hosseinzadeh, Founder, standing outdoors and wearing a Radvix hoodie, smiling."
                className="hidden w-full max-w-[566px] xl:inline-block"
              />
              <Image
                src={NimaT}
                alt="Photo of Nima Hosseinzadeh, Founder, standing outdoors and wearing a Radvix hoodie, smiling."
                className="hidden w-full max-w-[940px] md:inline-block xl:hidden"
              />
              <Image
                src={NimaM}
                alt="Photo of Nima Hosseinzadeh, Founder, standing outdoors and wearing a Radvix hoodie, smiling."
                className="w-full max-w-[388px] md:hidden"
              />
            </div>
          </div>

          <div className="text-center leading-10 md:text-left xl:flex-1">
            <h2>Our Story</h2>
            <div className="my-9 border-t border-seperator" />
            <p className="mb-6">
              Being part of the science and research community has shown me the
              profound impact that research projects have on our lives. Despite
              their significance, I noticed that many researchers rely on
              generic tools to manage their data and communicate, leading to
              inefficiencies and added stress. Researchers often spend countless
              hours organizing data and catching up on communications, worrying
              that something crucial might be missed.
            </p>
            <p>
              This situation highlighted the need for a specialized tool that
              understands the unique workflows of research projects and
              facilitates smoother, more effective collaboration. Researchers
              should be able to focus on what truly matters—the research
              itself—without being bogged down by administrative tasks.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center leading-10 md:text-left lg:mt-15">
          <p>
            Motivated by this need, our team came together and, with the support
            of the continuous feedback from the research community, we built
            Radvix. Our platform is designed to streamline research management,
            allowing researchers to dedicate their time to innovation and
            discovery.
          </p>
          <p className="mt-8 font-bold italic">Nima Hosseinzadeh - Founder</p>
        </div>
      </div>
    </article>
  );
}
