"use client";

import React from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import Button from "@/lib/designPattern/Button";
import { ActiveButtonProvider } from "@/Hooks/useActiveButton";
import NavMenu from "@/lib/designPattern/NavMenu";

function Navbar() {
  return (
    <ActiveButtonProvider>
      <nav className="w-full max-h-40 py-4 bg-[#00205B] inline-flex justify-center gap-52 flex-nowrap mb-5 z-20">
        {/* Navigation props */}
        <div className="flex gap-10 justify-end text-white text-xl">
          <div className="mt-1">
            <Image
              src="assets/logo.svg"
              alt="Jetblue image"
              width={90}
              height={30}
            />
          </div>
          <NavMenu
            content="Book"
            children={
              <Button
                content="Book"
                underlineActive={true}
                addChevron={true}
                style="inline-flex items-center justify-center cursor-pointer gap-2"
                addIconBefore={false}
                isTrigger={true}
              />
            }
            dropdownContent={bookDropdown()}
          />
          <Button
            content={"Manage Trips"}
            underlineActive={true}
            addChevron={false}
            style={
              "inline-flex items-center justify-center cursor-pointer gap-2"
            }
            addIconBefore={false}
          />
          <Button
            content={"Check in"}
            underlineActive={true}
            addChevron={false}
            style={
              "inline-flex items-center justify-center cursor-pointer gap-2"
            }
            addIconBefore={false}
          />
          <NavMenu
            content="Travel in"
            children={
              <Button
                content={"Travel in"}
                style={
                  "inline-flex items-center justify-center cursor-pointer gap-2"
                }
                underlineActive={true}
                addChevron={true}
                addIconBefore={false}
                isTrigger={true}
              />
            }
          />
        </div>

        <div className={"flex gap-10 justify-end text-white text-xl"}>
          <NavMenu
            content="Sign In"
            children={
              <Button
                content={"Sign In"}
                underlineActive={true}
                addChevron={false}
                addIconBefore={true}
                style={
                  "inline-flex items-center justify-center cursor-pointer gap-2"
                }
                isTrigger={true}
              />
            }
            dropDownStyle="w-40"
          />
          <li
            className={
              "inline-flex items-center justify-center cursor-pointer gap-2"
            }>
            <IoCartOutline size={"35"} />
          </li>
        </div>
      </nav>
    </ActiveButtonProvider>
  );
}

export function bookDropdown() {
  return (
    <div className="flex gap-10 justify-center text-white text-xl">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          src={"assets/NavBarAssets/airplaine.svg"}
          width={100}
          height={100}
          alt="Jetblue flights"
        />
        <h1 className="text-blue-700 hover:underline">Flight</h1>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          src={"assets/NavBarAssets/airplaine.svg"}
          width={30}
          height={30}
          alt="Jetblue flights"
        />
        <h1>Flight</h1>
      </div>
    </div>
  );
}

export default Navbar;
