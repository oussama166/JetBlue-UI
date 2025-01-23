import React, { createContext, useContext, useState } from "react";

// Create a context for the active button
const ActiveButtonContext = createContext<{
  activeButton: string | null;
  setActiveButton: (id: string | null) => void;
  type: "navigationDropdown" | "Navigation";
  setType: (type: "navigationDropdown" | "Navigation") => void;
}>({
  activeButton: null,
  setActiveButton: () => {},
  type: "Navigation",
  setType: () => {},
});

// Provider component to wrap your app or button group
export const ActiveButtonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeButton, setActiveButton] = useState<string | null>("");
  const [type, setType] = useState<"navigationDropdown" | "Navigation">(
    "Navigation"
  );

  return (
    <ActiveButtonContext
      value={{ activeButton, setActiveButton, type, setType }}>
      {children}
    </ActiveButtonContext>
  );
};

// Custom hook to use the context
export const useActiveButton = () => useContext(ActiveButtonContext);
