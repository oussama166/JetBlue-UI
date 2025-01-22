"use client"

import React from "react";
import Image from "next/image";
import {IoCartOutline} from "react-icons/io5";
import Button from "@/lib/designPattern/Button";
import {ActiveButtonProvider} from "@/Hooks/useActiveButton";

function Navbar() {

    return (
        <ActiveButtonProvider>
            <nav
                className={"w-full max-h-40 py-4 bg-[#00205B] inline-flex justify-center gap-52 flex-nowrap mb-5 overflow-hidden"}>
                {/* Navigation props */}
                <div className={"flex gap-10 justify-end text-white text-xl"}>
                    <div className={"mt-1"}>
                        <Image src={"assets/logo.svg"} alt={"Jetblue image"} width={90} height={30} className={""}/>
                    </div>
                    <Button
                        content={"Book"} underlineActive={true} addChevron={true}
                        style={"inline-flex items-center justify-center cursor-pointer gap-2"} addIconBefore={false}
                    />

                    <Button
                        content={"Manage Trips"} underlineActive={true} addChevron={false}
                        style={"inline-flex items-center justify-center cursor-pointer gap-2"} addIconBefore={false}
                    />
                    <Button
                        content={"Check in"} underlineActive={true} addChevron={false}
                        style={"inline-flex items-center justify-center cursor-pointer gap-2"} addIconBefore={false}
                    />
                    <Button
                        content={"Travel in"} style={"inline-flex items-center justify-center cursor-pointer gap-2"}
                        underlineActive={true} addChevron={true} addIconBefore={false}
                    />
                </div>


                <div className={"flex gap-10 justify-end text-white text-xl"}>
                    <Button
                        content={"Sign In"} underlineActive={true} addChevron={false} addIconBefore={true}
                        style={"inline-flex items-center justify-center cursor-pointer gap-2"}
                    />
                    <li className={"inline-flex items-center justify-center cursor-pointer gap-2"}>
                        <IoCartOutline size={"35"}/>
                    </li>
                </div>
            </nav>
        </ActiveButtonProvider>
    );
}

export default Navbar;
