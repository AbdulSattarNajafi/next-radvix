"use client";

import React, { useState, useEffect, useRef } from "react";
import { default as SlickSlider } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import SliderNav from "@/components/SliderNav";
import SliderButton from "@/components/SliderButton";
import Image from "next/image";
import { BestTabsItem } from "./constant";

type BestSliderProps = {
  sliderItems: {
    icon: React.JSX.Element;
    label: string;
  }[];
};
type SliderInstance = SlickSlider | null;

export default function BestSlider({ sliderItems }: BestSliderProps) {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: false,
    adaptiveHeight: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 866,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const secondSliderSetting = {
    className: "best-slider",
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
      <div className="flex items-center gap-1 px-5 sm:gap-3 md:px-10 lg:justify-center">
        <div className="shrink-0 lg:hidden">
          <SliderNav
            onClick={() => sliderRef1.current?.slickPrev()}
            name="Previous Slide"
          >
            <FaChevronLeft />
          </SliderNav>
        </div>
        <div className="flex-1 overflow-hidden lg:max-w-[620px]" id="slider">
          <SlickSlider
            asNavFor={nav2!}
            ref={sliderRef1}
            {...firstSliderSetting}
          >
            {sliderItems.map((item, index) => (
              <div key={index} className="px-1 py-3">
                <div className="flex justify-center">
                  <SliderButton
                    onClick={tabHandler.bind(null, index)}
                    label={item.label}
                    isActive={activeTab === index}
                    variant="secondary"
                  >
                    {item.icon}
                  </SliderButton>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
        <div className="shrink-0 lg:hidden">
          <SliderNav
            onClick={() => sliderRef1.current?.slickNext()}
            name="Next Slide"
          >
            <FaChevronRight />
          </SliderNav>
        </div>
      </div>

      <div className="mt-12 flex items-center md:mt-15 lg:mt-12 lg:gap-10 lg:px-12">
        <div className="hidden shrink-0 lg:block">
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
            {BestTabsItem.map((item, index) => (
              <div key={index} className="px-5">
                <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-10">
                  <div className="mb-25 flex justify-center lg:mb-0 lg:w-[38%] lg:justify-start">
                    <div className="text-center">
                      <Image
                        src={item.image}
                        className="inline-blcok w-full max-w-[366px]"
                        priority
                        alt={item.imageAlt}
                      />
                    </div>
                  </div>

                  <div className="lg:flex lg:w-[62%] lg:justify-end">
                    <div className="text-center lg:text-start">
                      <h3 className="mb-6">{item.title}</h3>
                      <p className="text-base">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
        <div className="hidden shrink-0 lg:block">
          <SliderNav onClick={() => sliderRef1.current?.slickNext()}>
            <FaChevronRight />
          </SliderNav>
        </div>
      </div>
    </>
  );
}
