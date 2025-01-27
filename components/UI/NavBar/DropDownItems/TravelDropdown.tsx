import React from "react";
import Airplaine from "@/components/UI/DynamicIcon/Airplaine";
import Bag from "@/components/UI/DynamicIcon/Bag";
import Family from "@/components/UI/DynamicIcon/Family";
import HappyFace from "@/components/UI/DynamicIcon/HappyFace";

const TravelDropdown = () => {
  const data: {
    title: string;
    iconPath: React.ReactNode;
    colStart: string | null;
    content: Array<string>;
  }[] = [
    {
      title: "Flying with Us",
      iconPath: (
        <Airplaine
          style={
            "absolute right-full -translate-x-2 -translate-y-1 fill-sky-900"
          }
        />
      ),
      colStart: null,
      content: [
        "Inflight Experience",
        "Mint®",
        "U.K. & Europe",
        "Wi-Fi",
        "EvenMore®",
        "Our Fares",
        "Business Travel",
        "Military Customers",
        "Destinations",
      ],
    },
    {
      title: "At the Airport",
      iconPath: (
        <Bag
          style={
            "absolute right-full -translate-x-2 -translate-y-1 fill-sky-900"
          }
        />
      ),
      colStart: "3",
      content: [
        "Bag Info",
        "Airport Info",
        "International Travel",
        "Ground Transfer",
        "Accessibility Assistance",
        "Terminal 5 at JFK",
        "TSA PreCheck",
        "Digital Immigration Forms",
      ],
    },
    {
      title: "Traveling Together",
      iconPath: (
        <Family
          style={
            "absolute right-full -translate-x-2 -translate-y-1 fill-sky-900"
          }
        />
      ),
      colStart: "5",
      content: ["Traveling with Kids", "Traveling with Pets", "Group Travel"],
    },
    {
      title: "Customer Assurance",
      iconPath: (
        <HappyFace
          style={
            "absolute right-full -translate-x-2 -translate-y-1 fill-sky-900"
          }
        />
      ),
      colStart: "7",
      content: [
        "Customer Service Plan",
        "Delays & Cancellations",
        "Travel Insurance",
      ],
    },
  ];

  return (
    <div className="mx-40 my-10 grid grid-cols-8 grid-rows-5 gap-4 text-sky-900">
      {data.map((section, index) => {
        const colStartClass = section.colStart
          ? `col-start-${section.colStart}`
          : "col-start-1";

        return (
          <div key={index} className={`col-span-2 row-span-5 ${colStartClass}`}>
            <div className={"relative"}>
              {section.iconPath}
              <h3 className="text-lg font-bold mb-2">{section.title}</h3>
            </div>
            <ul className="space-y-1">
              {section.content.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-sm hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TravelDropdown;
