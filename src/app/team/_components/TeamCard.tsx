import Image, { StaticImageData } from "next/image";
import React from "react";

type TeamCardProps = {
  image: StaticImageData;
  name: string;
  position: string;
  alt: string;
};

export default function TeamCard({
  image,
  name,
  position,
  alt,
}: TeamCardProps) {
  return (
    <div className="flex flex-col gap-6 px-2.5 py-10">
      <div className="flex justify-center">
        <Image
          className="h-51 w-51 rounded-full mix-blend-luminosity"
          src={image}
          width={200}
          height={200}
          alt={alt}
        />
      </div>
      <div className="text-center">
        <h3 className="mb-2.5 text-lg">{name}</h3>
        <p className="text-lg font-medium text-zinc-800">{position}</p>
      </div>
    </div>
  );
}
