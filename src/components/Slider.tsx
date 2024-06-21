"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { default as SlickSlider } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import SliderNav from "@/components/SliderNav";
import SliderButton from "@/components/SliderButton";

type SliderProps = {
  sliderItems: {
    icon: React.JSX.Element;
    label: string;
  }[];
  children: ReactNode;
  sliderItemVariant?: "primary" | "secondary";
  slidesToShow: number;
  settings: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }[];
};
type SliderInstance = SlickSlider | null;

export default function Slider({
  sliderItems,
  children,
  sliderItemVariant,
  slidesToShow,
  settings,
}: SliderProps) {
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
    slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: false,
    adaptiveHeight: true,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: settings.map((res) => ({
      breakpoint: res.breakpoint,
      settings: { slidesToShow: res.settings.slidesToShow },
    })),
  };

  const secondSliderSetting = {
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
      <div className="flex items-center gap-3 px-5 md:px-10">
        <SliderNav
          onClick={() => sliderRef1.current?.slickPrev()}
          name="Previous Slide"
        >
          <FaChevronLeft />
        </SliderNav>
        <div className="flex-1 overflow-hidden" id="slider">
          <SlickSlider
            asNavFor={nav2!}
            ref={sliderRef1}
            {...firstSliderSetting}
          >
            {sliderItems.map((item, index) => (
              <div key={index} className="px-2 py-3">
                <div className="flex justify-center">
                  <SliderButton
                    onClick={tabHandler.bind(null, index)}
                    label={item.label}
                    isActive={activeTab === index}
                    variant={sliderItemVariant}
                  >
                    {item.icon}
                  </SliderButton>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
        <SliderNav
          onClick={() => sliderRef1.current?.slickNext()}
          name="Next Slider"
        >
          <FaChevronRight />
        </SliderNav>
      </div>

      <div className="mt-15 md:mt-22">
        <SlickSlider asNavFor={nav1!} ref={sliderRef2} {...secondSliderSetting}>
          {children}
        </SlickSlider>
      </div>
    </>
  );
}
