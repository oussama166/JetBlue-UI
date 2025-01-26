import useClickOutside from "@/Hooks/useClickOutside";
import React, { ReactNode, useRef, useState } from "react";

type CollectionProps = {
  collections: string[];
  defaultValue: string;
  chevron?: ReactNode;
  addChevron?: boolean;
};
function Dropdown({
  collections,
  defaultValue,
  chevron,
  addChevron = false,
}: CollectionProps) {
  const [selected, setSelected] = useState<string>(defaultValue);
  const dropRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Use the custom hook to handle clicks outside the NavMenu
  useClickOutside(
    // @ts-ignore
    dropRef, // Pass the unique ref
    () => {
      if (isOpen) {
        setIsOpen(false);
      }
    },
    [dropRef, setIsOpen]
  );
  return (
    <div
      ref={dropRef}
      className="group max-w-xl w-[110px]"
      aria-expanded={isOpen}>
      <h1
        id="selectedArea"
        onClick={() => {
          if (dropRef.current) {
            setIsOpen(!isOpen);
          }
        }}
        className="cursor-pointer text-blue-900 font-semibold text-md p-2 flex items-center  hover:text-blue-950">
        {selected}
        {addChevron && (
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}>
            {chevron}
          </span>
        )}
      </h1>
      {isOpen && (
        <div
          className={`absolute mt-2 border border-none rounded-2xl shadow-lg text-md overflow-hidden max-w-40 w-full`}
          aria-expanded={isOpen}>
          {collections.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
              className={`p-4 cursor-pointer ${
                selected === item
                  ? "bg-blue-900 text-white"
                  : "bg-white hover:bg-gray-200"
              }`}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
