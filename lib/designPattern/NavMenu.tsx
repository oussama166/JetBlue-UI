import { useActiveButton } from "@/Hooks/useActiveButton";
import useClickOutside from "@/Hooks/useClickOutside";
import React, { useRef } from "react";
import { cn } from "../utils";

const NavMenu = ({
  content = "",
  children,
  dropdownContent,
  dropDownStyle = "w-full left-0",
}: {
  content: string;
  children: React.ReactNode;
  dropdownContent?: React.ReactNode;
  dropDownStyle?: string;
}) => {
  const { activeButton, setActiveButton, type } = useActiveButton();
  const isActive = activeButton === content;
  const navMenuRef = useRef<HTMLDivElement>(null); // Unique ref for each NavMenu instance

  const toggleDropdown = () => {
    console.log("Toggle dropdown for: ", content);
    console.log(navMenuRef.current);

    setActiveButton(isActive ? null : content);
  };

  // Use the custom hook to handle clicks outside the NavMenu
  useClickOutside(
    // @ts-ignore
    navMenuRef, // Pass the unique ref
    () => {
      if (
        activeButton === content &&
        type === "navigationDropdown" &&
        navMenuRef.current?.getAttribute("aria-label") === activeButton
      ) {
        console.log("Closing dropdown for: ", activeButton);
        setActiveButton(null); // Close the dropdown
      }
    },
    [setActiveButton, activeButton, type, content]
  );

  return (
    <div
      ref={navMenuRef} // Attach the unique ref to the container
      className="p-0 m-0 border-0 flex"
      aria-label={content}>
      {/* Trigger Component */}
      <div className="p-0 border-0 m-0 flex" onClick={toggleDropdown}>
        {children}
      </div>
      {/* Dropdown Content */}
      <div
        className={cn(
          dropDownStyle,
          `absolute  top-0 min-h-20 bg-slate-50 z-10  text-black p-5 transition-all duration-500 ease-in-out transform ${
            isActive
              ? "translate-y-[67px] opacity-100"
              : "-translate-y-[200px] opacity-0"
          }`
        )}>
        {/* Render the dropdown content */}
        {dropdownContent || <DefaultContent />}
      </div>
    </div>
  );

  // Default content if no dropdownContent is provided
  function DefaultContent() {
    return (
      <div className="p-0 m-0 border-0 flex">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          hic.
        </p>
      </div>
    );
  }
};

export default NavMenu;
