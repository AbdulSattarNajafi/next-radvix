import { RxRulerSquare, RxPencil1, RxChatBubble } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TbNotes } from "react-icons/tb";
import { BiPieChart } from "react-icons/bi";
import { ProjectIcon } from "@/assets/icons/Icons";

import { FeaturesTabItems } from "./constant";
import Slider from "@/components/Slider";
import Image from "next/image";

const sliderItems = [
  { icon: <ProjectIcon />, label: "Project" },
  { icon: <HiOutlineUserCircle className="h-6 w-6" />, label: "Team" },
  { icon: <RxPencil1 className="h-6 w-6" />, label: "Write & Publish" },
  { icon: <TbNotes className="h-6 w-6" />, label: "Task" },
  { icon: <BiPieChart className="h-6 w-6" />, label: "Data" },
  { icon: <RxRulerSquare className="h-6 w-6" />, label: "Equipments" },
  { icon: <RxChatBubble className="h-6 w-6" />, label: "Communication" },
];

const sliderSettings = [
  {
    breakpoint: 469,
    settings: {
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 669,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 920,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 1099,
    settings: {
      slidesToShow: 4,
    },
  },
  {
    breakpoint: 1299,
    settings: {
      slidesToShow: 5,
    },
  },
  {
    breakpoint: 1489,
    settings: {
      slidesToShow: 6,
    },
  },
];

export default function Features() {
  return (
    <section className="py-10 lg:py-22">
      <div className="wrapper px-0">
        <Slider
          slidesToShow={7}
          sliderItems={sliderItems}
          settings={sliderSettings}
        >
          {FeaturesTabItems.map((item) => (
            <div className="px-5 md:px-10" key={item.tabName}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
                <div className="mb-13 w-full md:mb-25 lg:mb-0 lg:w-1/2">
                  <h2 className="mb-10 text-center sm:text-left">
                    {item.title}
                  </h2>

                  <div className="flex flex-col gap-3 lg:gap-5">
                    {item.descriptions.map((desc, index) => (
                      <div
                        key={index}
                        className="rounded-[10px] border border-stroke p-5"
                      >
                        <h3 className="text-lg">{desc.title}</h3>
                        <div className="my-6 h-px bg-seperator" />
                        <p className="text-base">{desc.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex w-full justify-center lg:w-1/2 lg:ps-12">
                  <div>
                    <Image
                      className="inline-block w-full max-w-[468px]"
                      src={item.image}
                      priority
                      alt={item.imageAlt}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
