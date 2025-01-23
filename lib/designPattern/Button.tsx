import React, { ForwardedRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { PiUserCircle } from "react-icons/pi";
import { buttonType } from "@/Type/type";
import { useActiveButton } from "@/Hooks/useActiveButton";

/**
 * This Button is custom one
 *
 * @param content -  Place the content of the button
 * @param style -  You can add your custom style to the button combining the static style for the button behavior with your own one
 * @param underlineActive - (True / Default -> False) active the underline feature
 * @param addChevron - (True / Default -> False) active the side chevron icon
 * @param addIconBefore - (True / Default -> False) active icon before the content
 * @param ref - Is Forward ref give the possibility to use the DOM properties in the parent element
 * @param isTrigger - (True / Default -> False) active the trigger feature
 *
 * @return ForwardedRef<Button>
 *
 * */
const Button = (
  {
    content,
    style,
    underlineActive = false,
    addChevron = false,
    addIconBefore = false,
    isTrigger = false,
  }: buttonType,
  ref: ForwardedRef<any>
) => {
  const buttonRef = useRef<HTMLDivElement | null>(null); // Ref for the button
  const { activeButton, setActiveButton, setType, type } = useActiveButton(); // Use the shared context

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click happened outside the button
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        type === "navigationDropdown"
      ) {
        // Deactivate the button if needed
        buttonRef.current.setAttribute("aria-busy", "false");
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    // Toggle the active state
    if (activeButton === content) {
      setActiveButton(null); // Deactivate if already active
    } else {
      setActiveButton(content ?? ""); // Activate this button
      setType(
        buttonRef.current?.getAttribute("aria-expanded")
          ? "navigationDropdown"
          : "Navigation"
      );
    }
  };

  const isActive = activeButton === content; // Check if this button is active

  return (
    <div
      className={cn("relative cursor-pointer group", style)}
      onClick={handleClick}
      aria-busy={isActive}
      aria-expanded={isTrigger}
      ref={buttonRef}>
      {addIconBefore && (
        <PiUserCircle
          className={"p-0 group-aria-busy:font-semibold"}
          size={"35"}
        />
      )}

      <h1 className={"group-aria-busy:font-medium"}>{content}</h1>

      {/* Add Chevron after the content */}
      {addChevron && (
        <ChevronDown
          className={
            "p-0 group-aria-busy:rotate-180 transition-transform duration-300"
          }
          strokeWidth={2}
        />
      )}

      {/* Add separate underline in the button */}
      {underlineActive && (
        <>
          {/* Left line */}
          <div className="max-w-[50%] w-full h-2 absolute bg-orange-500 top-full left-1/2 -translate-x-full translate-y-[120%] scale-x-0 group-aria-busy:scale-x-100 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
          {/* Right line */}
          <div className="max-w-[50%] w-full h-2 absolute bg-orange-500 top-full left-1/2 translate-y-[120%] scale-x-0 group-aria-busy:scale-x-100 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </>
      )}
    </div>
  );
};

export default React.forwardRef(Button);
