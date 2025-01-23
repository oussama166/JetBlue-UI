import { useEffect, RefObject } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  dependencies: any[] = []
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref?.current && !ref?.current.contains(event.target as Node)) {
        callback();
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, ...dependencies]);
};

export default useClickOutside;
