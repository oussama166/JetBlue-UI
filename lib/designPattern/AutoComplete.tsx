import React from 'react';
import {TextField} from "@/lib/designPattern/TextField";
import Browse from "@/components/UI/DynamicIcon/Browse";

interface IAutoComplete {
    isOpen : boolean;
}

function AutoComplete({isOpen}: IAutoComplete) {
    return (
        <div className={"relative min-w-[350px] aria-expanded:hidden"} aria-expanded={isOpen}>
            <TextField
                label={"From"}
                variant={"outlined"}
                size={"md"}
                color={"enabled"}
                type={"text"}
                disabled={false}
            />
            <section className={"w-full absolute bg-gray-50 rounded-b-sm"}>
                <div>
                    <h1 className={"pt-5 text-xs font-medium text-gray-500 px-5"}>NEARBY</h1>
                    <div className={"w-full flex flex-col"}>
                        <h1 className={"px-5 py-2 cursor-pointer text-jetblue-800 hover:bg-jetblue-800 hover:text-white hover:font-semibold transition-colors"}>Casablanca,Morocco
                            (CMN)</h1>
                        <h1 className={"px-5 py-2 cursor-pointer text-jetblue-800 hover:bg-jetblue-800 hover:text-white hover:font-semibold transition-colors"}>Casablanca,Morocco
                            (CMN)</h1>
                    </div>

                    <div>
                        <h1 className={"pt-3 text-xs font-medium text-gray-500 px-5"}>RECENT</h1>
                        <div className={"w-full flex flex-col"}>
                            <h1 className={"px-5 py-2 cursor-pointer text-jetblue-800 hover:bg-jetblue-800 hover:text-white hover:font-semibold"}>
                                Austin, TX(AUS)</h1>
                            <h1 className={"px-5 py-2 cursor-pointer text-jetblue-800 hover:bg-jetblue-800 hover:text-white hover:font-semibold"}>Casablanca,Morocco
                                (CMN)</h1>
                        </div>
                        <hr className={"w-full"}/>
                        <h1 className={"flex items-center px-5 py-2 cursor-pointer text-jetblue-800 group"}>
                            <Browse style={"text-jetblue-800"}/>
                            <span
                                className={"group-hover:underline group-hover:text-jetblue-900 group-hover:font-semibold"}>Browse by regions</span>
                        </h1>
                    </div>
                </div>

                <div className={"font-medium text-zinc-100 px-5 w-full bg-zinc-200 flex justify-start gap-5 p-3"}>
                    <h1 className={"text-base font-medium text-gray-900"}>
                        Mint Service
                    </h1>
                    <h1 className={"text-base font-medium text-gray-900"}>
                        Partner Airline
                    </h1>

                </div>

            </section>
        </div>
    );
}

export default AutoComplete;