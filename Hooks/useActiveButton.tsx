import React, { createContext, useContext, useState } from "react";

// Define the type for the context value
type ActiveButtonContextType = {
  activeButton: string | null;
  setActiveButton: (id: string | null) => void;
  type: "navigationDropdown" | "Navigation";
  setType: (type: "navigationDropdown" | "Navigation") => void;
};

// Create a context with default values
const ActiveButtonContext = createContext<ActiveButtonContextType>({
  activeButton: "Flight", // Default active button
  setActiveButton: () => {},
  type: "navigationDropdown", // Default type
  setType: () => {},
});

// Provider component to wrap your app or button group
export const ActiveButtonProvider = ({
  children,
  initialActiveButton = "flight", // Default value for activeButton
  initialType = "navigationDropdown", // Default value for type
}: {
  children: React.ReactNode;
  initialActiveButton?: string | null; // Optional prop to override default
  initialType?: "navigationDropdown" | "Navigation"; // Optional prop to override default
}) => {
  const [activeButton, setActiveButton] = useState<string | null>(
    initialActiveButton
  );
  const [type, setType] = useState<"navigationDropdown" | "Navigation">(
    initialType
  );

  return (
    <ActiveButtonContext.Provider
      value={{ activeButton, setActiveButton, type, setType }}>
      {children}
    </ActiveButtonContext.Provider>
  );
};

// Custom hook to use the context
export const useActiveButton = () => useContext(ActiveButtonContext);
