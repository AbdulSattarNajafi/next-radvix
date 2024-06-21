"use client";

import React, { useState, useEffect, useRef } from "react";
import { default as SlickSlider } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import SliderNav from "@/components/SliderNav";
import SliderButton from "@/components/SliderButton";
import { DetailTabItems } from "./constant";
import Image from "next/image";

type DetailSliderProps = {
  sliderItems: {
    icon: React.JSX.Element;
    label: string;
  }[];
};
type SliderInstance = SlickSlider | null;

export default function DetailSlider({ sliderItems }: DetailSliderProps) {
  const [activeTab, setActiveTab] = useState(0);

  const [nav1, setNav1] = useState<SliderInstance>(null);
  const [nav2, setNav2] = useState<SliderInstance>(null);
  let sliderRef1 = useRef<SliderInstance>(null);
  let sliderRef2 = useRef<SliderInstance>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const firstSliderSetting = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: false,
    adaptiveHeight: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1059,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const secondSliderSetting = {
    className: "detail-slider",
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: false,
    swipeToSlide: true,
    beforeChange: (prev: number, next: number) => {
      setActiveTab(next);
    },
  };

  function tabHandler(index: number) {
    setActiveTab(index);
    sliderRef2.current?.slickGoTo(index);
  }

  return (
    <>
      <div className="flex items-center gap-1 px-5 sm:gap-3 md:px-10 xl:justify-center">
        <div className="shrink-0 xl:hidden">
          <SliderNav
            onClick={() => sliderRef1.current?.slickPrev()}
            name="Previous Slide"
          >
            <FaChevronLeft />
          </SliderNav>
        </div>
        <div className="flex-1 overflow-hidden xl:max-w-[1150px]" id="slider">
          <SlickSlider
            asNavFor={nav2!}
            ref={sliderRef1}
            {...firstSliderSetting}
          >
            {sliderItems.map((item, index) => (
              <div key={index} className="py-3 sm:px-2">
                <div className="flex justify-center">
                  <SliderButton
                    onClick={tabHandler.bind(null, index)}
                    label={item.label}
                    isActive={activeTab === index}
                  >
                    {item.icon}
                  </SliderButton>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
        <div className="shrink-0 xl:hidden">
          <SliderNav
            onClick={() => sliderRef1.current?.slickNext()}
            name="Next Slide"
          >
            <FaChevronRight />
          </SliderNav>
        </div>
      </div>

      <div className="mt-12 flex items-center md:mt-15 lg:mt-12 xl:gap-15 xl:px-10">
        <div className="hidden shrink-0 xl:block">
          <SliderNav onClick={() => sliderRef1.current?.slickPrev()}>
            <FaChevronLeft />
          </SliderNav>
        </div>
        <div className="flex-1 overflow-hidden">
          <SlickSlider
            asNavFor={nav1!}
            ref={sliderRef2}
            {...secondSliderSetting}
          >
            {DetailTabItems.map((item, index) => (
              <div className="px-5 md:px-10" key={index}>
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <div className="mb-15 flex justify-center lg:mb-0 lg:w-1/2 lg:justify-end lg:pe-15">
                    <div>
                      <Image
                        className="inline-block w-full max-w-[400px]"
                        src={item.image}
                        alt={item.imageAlt}
                      />
                    </div>
                  </div>
                  <div className="text-center lg:w-1/2 lg:text-left">
                    <div className="lg:max-w-[412px]">
                      <h3 className="mb-6">{item.title}</h3>
                      <p className="text-base">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
        <div className="hidden shrink-0 xl:block">
          <SliderNav onClick={() => sliderRef1.current?.slickNext()}>
            <FaChevronRight />
          </SliderNav>
        </div>
      </div>
    </>
  );
}
