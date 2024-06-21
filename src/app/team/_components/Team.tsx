import React from "react";
import TeamCard from "./TeamCard";
import { TeamMembers } from "./constant";

export default function Team() {
  return (
    <section className="mb-2.5 py-15 md:mb-0 lg:py-22">
      <div className="wrapper">
        <div className="mb-2.5 text-center">
          <h1 className="mb-6">We Are Radvix Team</h1>
          <p className="text-xl text-text-color">
            A great workplace combines exceptional people with challenging
            problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5 xl:gap-0">
          {TeamMembers.map((team) => (
            <div className="felx justify-center" key={team.name}>
              <TeamCard
                name={team.name}
                position={team.position}
                image={team.image}
                alt={team.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
