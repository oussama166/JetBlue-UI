import Image from "next/image";
import React from "react";

function BookDropdown() {
    return (
        <div className="flex gap-10 justify-center items-center text-white text-xl">
            <div className="flex flex-col justify-center items-center gap-2 group cursor-pointer">
                <div className="flex items-center justify-center w-[100px] h-[100px]">
                    <Image
                        src={"assets/NavBarAssets/airplaine.svg"}
                        width={100}
                        height={100}
                        alt="Jetblue flights"
                    />
                </div>
                <h1 className="text-sky-900 group-hover:underline text-center">Flights</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 group cursor-pointer">
                <div className="flex items-center justify-center w-[100px] h-[100px]">
                    <Image
                        src={"assets/NavBarAssets/stay.svg"}
                        width={100}
                        height={100}
                        alt="Jetblue stays"
                    />
                </div>
                <h1 className="text-sky-900 group-hover:underline text-center max-w-[120px]">
                    Car, stays & activities
                </h1>
            </div>
        </div>
    );
}

export default BookDropdown;