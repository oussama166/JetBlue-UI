import Collaps from "@/lib/designPattern/Collaps";
import Dropdown from "@/lib/designPattern/Dropdown";
import { ChevronDown } from "lucide-react";
import React from "react";

function FlightTabs() {
  return (
    <section className="flex">
      <Dropdown
        collections={["Round-trip", "One-way", "Multi-city"]}
        defaultValue={"Round-trip"}
        chevron={
          <ChevronDown
            className={"p-0 transition-transform duration-300"}
            strokeWidth={2}
            size={16}
          />
        }
        addChevron={true}
      />
      <Collaps />
    </section>
  );
}

export default FlightTabs;
