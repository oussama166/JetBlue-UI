import React, {createContext, useContext, useState} from 'react';

// Create a context for the active button
const ActiveButtonContext = createContext<{
    activeButton: string | null;
    setActiveButton: (id: string | null) => void;
}>({
    activeButton: null,
    setActiveButton: () => {
    },
});

// Provider component to wrap your app or button group
export const ActiveButtonProvider = ({children}: { children: React.ReactNode }) => {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    return (
        <ActiveButtonContext value={{activeButton, setActiveButton}}>
            {children}
        </ActiveButtonContext>
    );
};

// Custom hook to use the context
export const useActiveButton = () => useContext(ActiveButtonContext);