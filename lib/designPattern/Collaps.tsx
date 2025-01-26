import PassengerInfoPanel from "@/components/UI/Collaps/PassengersInfo";
import useClickOutside from "@/Hooks/useClickOutside";
import {useRef, useState} from "react";

function Collaps() {
    const [isOpen, setIsOpen] = useState(false);
    const [showValue, setShowValue] = useState<string>("");
    const ref = useRef<HTMLDivElement | null>(null);


    useClickOutside(
        // @ts-ignore
        ref,
        () => {
            setIsOpen(false);
        },
        [isOpen]
    );
    return (
        <div className="relative" ref={ref}>
            <h1
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="cursor-pointer text-blue-900 font-semibold text-md p-2 flex items-center  hover:text-blue-950">
                {showValue}
            </h1>
            <PassengerInfoPanel ariaHidden={!isOpen} showUpValue={setShowValue}/>
        </div>
    );
}

export default Collaps;
