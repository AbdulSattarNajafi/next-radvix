import { UniversityIcon, MoneyIcon, UsersIcon } from "@/assets/icons/Icons";

import BestSlider from "./BestSlider";

const sliderItems = [
  {
    icon: <UsersIcon />,
    label: "Research Groups",
  },
  {
    icon: <UniversityIcon />,
    label: "Academic Bodies",
  },
  {
    icon: <MoneyIcon />,
    label: "Funding Entities",
  },
];

export default function Best() {
  return (
    <article className="mb-2.5 py-13 md:mb-0">
      <div className="wrapper">
        <div className="mx-auto w-full rounded-[10px] border border-stroke bg-gray-light py-5 sm:py-8 md:py-10">
          <div className="mx-auto mb-11 w-full max-w-6xl px-5 text-center">
            <h2>
              Maximizing Research Impact for Teams, Universities, and Funding
              Agencies
            </h2>
          </div>

          <BestSlider sliderItems={sliderItems} />
        </div>
      </div>
    </article>
  );
}
