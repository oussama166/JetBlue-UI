import { Button } from "@/lib/designPattern/Button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function PassengerInfoPanel({
  ariaHidden = true,
  showUpValue,
}: {
  ariaHidden: boolean;
  showUpValue: Dispatch<SetStateAction<string>>;
}) {
  const [adult, setAdult] = useState<number>(0);
  const [child, setChild] = useState<number>(0);
  const [infant, setInfant] = useState<number>(0);

  const [adultError, setAdultError] = useState<boolean>(false);
  const [childError, setChildError] = useState<boolean>(false);
  const [infantError, setInfantError] = useState<boolean>(false);

  // Validation logic
  const handleConsignment = () => {
    if (adult + child > 7) {
      setAdultError(true);
    } else {
      setAdultError(false);
    }

    if (child > 3 && adult === 0) {
      setChildError(true);
    } else {
      setChildError(false);
    }

    if (infant > adult) {
      setInfantError(true);
    } else {
      setInfantError(false);
    }
  };

  // Reservation logic
  const handleReservation = () => {
    if (adult === 0 && (child > 0 || infant > 0)) {
      alert("At least one adult is required for children or infants.");
      return;
    }

    if (adult > 0 && infant > adult) {
      alert("Each adult can only have one lap infant.");
      return;
    }

    if (adult === 0 && child > 3) {
      alert("Maximum 3 children without an adult.");
      return;
    }

    if (adult + child + infant > 7) {
      alert("Maximum 7 travelers including infants.");
      return;
    }

    // Proceed with reservation logic
    showUpValue(MessageConstructor());
    console.log("Reservation successful", { adult, child, infant });
  };

  // Handle increment/decrement
  const handlePassengerCount = (
    type: "adult" | "child" | "infant",
    action: "increment" | "decrement"
  ) => {
    if (action === "decrement") {
      switch (type) {
        case "adult":
          setAdult((prev) => {
            const newAdultCount = prev > 0 ? prev - 1 : 0;
            // If infants exceed the new adult count, decrement infants
            if (infant > newAdultCount) {
              setInfant(newAdultCount);
            }
            return newAdultCount;
          });
          break;
        case "child":
          setChild((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "infant":
          setInfant((prev) => (prev > 0 ? prev - 1 : 0));
          break;
      }
    } else {
      switch (type) {
        case "adult":
          setAdult((prev) => (prev < 7 ? prev + 1 : 7));
          break;
        case "child":
          setChild((prev) => (prev < 3 ? prev + 1 : 3));
          break;
        case "infant":
          setInfant((prev) => (prev < 2 && prev < adult ? prev + 1 : prev));
          break;
      }
    }
  };
  // Construct the message based on passenger counts
  const MessageConstructor = () => {
    let message: string = "";
    if (adult === 0 && child === 0) {
      message = "Travelers";
    } else if (adult > 0 && child === 0) {
      message = `${adult} Adult${adult > 1 ? "s" : ""}`;
    } else if (adult === 0 && child > 0) {
      message = `${child} Child${child > 1 ? "ren" : ""}`;
    } else if (adult > 0 && child > 0) {
      message = `${adult} Adult${adult > 1 ? "s" : ""}, ${child} Child${
        child > 1 ? "ren" : ""
      }`;
    }
    if (infant > 0) {
      message += `, ${infant} Infant${infant > 1 ? "s" : ""}`;
    }
    return message;
  };

  // Trigger validation and reservation logic on state change
  useEffect(() => {
    handleConsignment();
    handleReservation();
  }, [adult, child, infant]);

  return (
    <div
      className="absolute left-0 mt-2 min-w-xl max-w-2xl w-[350px] bg-white p-4 rounded-md shadow-lg space-y-2 aria-hidden:hidden"
      aria-hidden={ariaHidden}>
      {/* Adult */}
      <div className="flex justify-between items-center">
        <h1 className="text-gray-700 font-semibold">Adults</h1>
        <div className="flex items-center space-x-2">
          <Button
            content={
              <CiCircleMinus
                size={32}
                className={`${adult <= 0 ? "text-gray-200" : ""}`}
              />
            }
            variant="Icon"
            size={"roundedFull"}
            color={"Default"}
            onClick={() => handlePassengerCount("adult", "decrement")}
            isDisabled={adult <= 0}
          />
          <span className="font-bold text-gray-700 cursor-none pointer-events-none">
            {adult}
          </span>
          <Button
            content={
              <CiCirclePlus
                size={32}
                className={`${adult >= 7 ? "text-gray-200" : ""}`}
              />
            }
            variant="Icon"
            size={"roundedFull"}
            color={"Default"}
            onClick={() => handlePassengerCount("adult", "increment")}
            isDisabled={adult >= 7}
          />
        </div>
      </div>
      <hr />

      {/* Child */}
      <div className="flex justify-between items-center">
        <h1 className="text-gray-700 font-semibold">Children (Under 14)</h1>
        <div className="flex items-center space-x-2">
          <Button
            content={
              <CiCircleMinus
                size={32}
                className={`${child <= 0 ? "text-gray-200" : ""}`}
              />
            }
            variant="Icon"
            size={"roundedFull"}
            color={"Default"}
            onClick={() => handlePassengerCount("child", "decrement")}
            isDisabled={child <= 0}
          />
          <p className="font-bold text-gray-700">{child}</p>
          <Button
            content={
              <CiCirclePlus
                size={32}
                className={`${child >= 3 ? "text-gray-200" : ""}`}
              />
            }
            variant="Icon"
            size={"roundedFull"}
            color={"Default"}
            onClick={() => handlePassengerCount("child", "increment")}
            isDisabled={child >= 3}
          />
        </div>
      </div>
      <hr />

      {/* Infant */}
      <div className="flex justify-between items-center">
        <h1 className="text-gray-700 font-semibold">Lap Infant (Under 2)</h1>
        <div className="flex items-center space-x-2">
          <Button
            content={
              <CiCircleMinus
                size={32}
                className={`${infant <= 0 ? "text-gray-200" : ""}`}
              />
            }
            variant="Icon"
            size={"roundedFull"}
            color={"Default"}
            onClick={() => handlePassengerCount("infant", "decrement")}
            isDisabled={infant <= 0} // Disable if no infants
          />
          <p className="font-bold text-gray-700">{infant}</p>
          <Button
            content={
              <CiCirclePlus
                size={32}
                className={`${
                  infant >= adult || infant >= 2 ? "text-gray-200" : ""
                }`}
              />
            }
            variant="Icon"
            size={"roundedFull"}
            color={"Default"}
            onClick={() => handlePassengerCount("infant", "increment")}
            isDisabled={infant >= adult || infant >= 2} // Disable if infants >= adults or infants >= 2
          />
        </div>
      </div>
      <hr />

      {/* Error Messages */}
      <div className="flex-col justify-between items-center space-y-2">
        <h1
          className={`${
            adultError ? "font-bold text-red-500" : "font-medium"
          }`}>
          Maximum 7 travelers not including infants.
        </h1>
        <h1
          className={`${
            childError ? "font-bold text-red-500" : "font-medium"
          }`}>
          Maximum 3 children without an adult.
        </h1>
        <h1
          className={`${
            infantError ? "font-bold text-red-500" : "font-medium"
          }`}>
          Maximum 2 lap infants, one per adult.
        </h1>
      </div>
    </div>
  );
}

export default PassengerInfoPanel;
