import Collaps from "@/lib/designPattern/Collaps";
import Dropdown from "@/lib/designPattern/Dropdown";
import { ChevronDown } from "lucide-react";
import React from "react";
import {TextField} from "@/lib/designPattern/TextField";

function FlightTabs() {
  return (
    <section className="flex flex-col">
        <div className={"w-full flex"}>
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
            <Collaps/>
        </div>
        <div className={"p-2 flex flex-nowrap space-x-3"}>
            <TextField
                label={"From"}
                value={""}
                variant={"standard"}
                size={"md"}
                color={"hovered"}
                type={"text"}
                disabled={false}
            />
            <TextField
                label={"To"}
                value={""}
                variant={"filled"}
                size={"md"}
                color={"hovered"}
                type={"text"}
                disabled={false}
            />
            <TextField
                label={"To"}
                value={""}
                variant={"outlined"}
                size={"md"}
                color={"hovered"}
                type={"text"}
                disabled={false}
            />
        </div>
    </section>
  );
}

export default FlightTabs;
