import React from "react";
import { BiDollar } from "react-icons/bi";
import { ClockIcon, FlaskIcon, SecureDataIcon } from "@/assets/icons/Icons";

import DetailSlider from "./DetailSlider";

const sliderItems = [
  {
    icon: <ClockIcon />,
    label: "Increase Research Capacity",
  },

  {
    icon: <FlaskIcon />,
    label: "Improve Research Continuity",
  },
  {
    icon: <SecureDataIcon />,
    label: "Optimize Data Management",
  },
  {
    icon: <BiDollar />,
    label: "Improve Fund Management",
  },
];

export default function Detail() {
  return (
    <section className="py-7 lg:py-22">
      <div className="wrapper">
        <div className="mb-12 text-center">
          <h2 className="mb-6">Helping Research Teams Stay Organized</h2>
          <p className="mx-auto w-full max-w-[846px]">
            Radvix bridges the gap between data, communication and team members
            by providing simple, yet powerful tools made for research workflows.
          </p>
        </div>
      </div>
      <div className="wrapper px-0">
        <DetailSlider sliderItems={sliderItems} />
      </div>
    </section>
  );
}
