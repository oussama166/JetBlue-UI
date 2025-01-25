import React, { ForwardedRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { PiUserCircle } from "react-icons/pi";
import { buttonLinkType, buttonType } from "@/Type/type";
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
const ButtonLink = (
  {
    content,
    style,
    underlineActive = false,
    addChevron = false,
    addIconBefore = false,

    isTrigger = false,
    IconAfter,
    IconBefore,
  }: buttonLinkType,
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
      {addIconBefore && IconBefore}

      <h1>{content}</h1>

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

export const Button = ({
  content = "Button", // Default content if none is provided
  customStyle = "", // Default to an empty string if no custom styles are passed
  color = "Default",
  size = "Default",
  variant = "Default",
  iconBefore = false,
  iconBeforeShow = false,
  iconAfter = false,
  iconAfterShow = false,
}: buttonType) => {
  /**
   * Variants define the general style of the button
   */
  const variants: Record<string, string> = {
    Default: "text-center text-white rounded-sm bg-gray-500",
    Fill: "text-white bg-blue-800 hover:bg-blue-900 text-center rounded-xl font-semibold",
    Outlined:
      "text-blue-800 border border-slate-500 hover:bg-slate-100/50 hover:text-blue-950 text-center rounded-xl font-semibold",
    Text: "text-blue-900 font-semibold hover:underline bg-none text-center",
    Icon: "bg-none",
  };

  /**
   * Sizes define the padding and font size of the button
   */
  const sizes: Record<string, string> = {
    Default: "px-4 py-2 text-sm",
    xsm: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
    xlg: "px-6 py-4 text-xl",
  };

  /**
   * Colors define the base color of the button
   */
  const colors: Record<string, string> = {
    Default: "",
    primary: "text-white bg-blue-800 hover:bg-blue-900",
    secondary: "text-white bg-gray-500 hover:bg-gray-600",
    error: "text-white bg-red-500 hover:bg-red-600",
    success: "text-white bg-green-500 hover:bg-green-600",
    disabled: "text-gray-400 bg-gray-200 cursor-not-allowed",
  };

  // Get styles based on props, fallback to defaults if invalid
  const userVariant = variants[variant] || variants.Default;
  const userSize = sizes[size] || sizes.Default;
  const userColor = colors[color] || colors.Default;

  return (
    <div
      className={cn(
        customStyle,
        userVariant,
        userSize,
        userColor,
        "cursor-pointer"
      )}>
      {iconBeforeShow && iconBefore}
      {content}
      {iconAfterShow && iconAfter}
    </div>
  );
};
export default React.forwardRef(ButtonLink);
