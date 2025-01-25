"use client";

import BookDropdown from "@/components/UI/BookDropdown";
import SignInDropDown from "@/components/UI/SignInDropDown";
import TravelDropdown from "@/components/UI/TravelDropdown";
import { ActiveButtonProvider } from "@/Hooks/useActiveButton";
import ButtonLink from "@/lib/designPattern/Button";
import NavMenu from "@/lib/designPattern/NavMenu";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { PiUserCircle } from "react-icons/pi";

function Navbar() {
  return (
    <ActiveButtonProvider>
      <nav className="w-full max-h-40 py-4 bg-[#00205B] inline-flex justify-center gap-52 flex-nowrap  z-20">
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
              <ButtonLink
                content="Book"
                underlineActive={true}
                addChevron={true}
                style="inline-flex items-center justify-center cursor-pointer gap-2"
                addIconBefore={false}
                isTrigger={true}
              />
            }
            dropdownContent={<BookDropdown />}
          />
          <ButtonLink
            content={"Manage Trips"}
            underlineActive={true}
            addChevron={false}
            style={
              "inline-flex items-center justify-center cursor-pointer gap-2"
            }
            addIconBefore={false}
          />
          <ButtonLink
            content={"Check in"}
            underlineActive={true}
            addChevron={false}
            style={
              "inline-flex items-center justify-center cursor-pointer gap-2"
            }
            addIconBefore={false}
          />
          <NavMenu
            content="Travel Info"
            children={
              <ButtonLink
                content={"Travel Info"}
                style={
                  "inline-flex items-center justify-center cursor-pointer gap-2"
                }
                underlineActive={true}
                addChevron={true}
                addIconBefore={false}
                isTrigger={true}
              />
            }
            dropdownContent={<TravelDropdown />}
          />
        </div>

        <div className={"flex gap-10 justify-end text-white text-xl"}>
          <NavMenu
            content="Sign In"
            children={
              <ButtonLink
                content={"Sign In"}
                underlineActive={true}
                addChevron={false}
                addIconBefore={true}
                IconBefore={
                  <PiUserCircle
                    className={"p-0 group-aria-busy:font-semibold"}
                    size={"35"}
                  />
                }
                style={
                  "inline-flex items-center justify-center cursor-pointer gap-2"
                }
                isTrigger={true}
              />
            }
            dropDownStyle="max-w-sm w-full -translate-x-[282px]"
            dropdownContent={<SignInDropDown />}
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

export default Navbar;
