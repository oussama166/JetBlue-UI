import { Button } from "@/lib/designPattern/Button";
import { ChevronRight } from "lucide-react";
import { FaCaretRight } from "react-icons/fa";

function SignInDropDown() {
  const data = [
    "Learn about TrueBlue",
    "Using points",
    "Mosaic",
    "JetBlue Credit Cards",
  ];
  return (
    <div className={"max-w-xl w-full flex flex-col gap-5"}>
      <div className={"w-full relative"}>
        <Button
          customStyle={"max-w-md w-full"}
          variant={"Fill"}
          size={"lg"}
          color={"Default"}
          content={"Sign In"}
        />
        <hr
          className={
            "min-w-[400px] w-full bg-slate-300 h-0.5 absolute -left-6 translate-y-2 rounded-md my-5 "
          }
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold my-5">Join TrueBlue (It's free!)</h1>
        <ul className="flex flex-col gap-2 my-5 ml-10 list-disc">
          {data.map((item, index) => (
            <li
              key={index}
              className={
                "text-lg text-sky-900 underline underline-offset-0 cursor-pointer"
              }>
              {item}
            </li>
          ))}
        </ul>
        <Button
          variant={"Outlined"}
          size={"lg"}
          color={"Default"}
          content={"Join now"}
        />
        <Button
          variant={"Text"}
          size={"md"}
          color={"Default"}
          content={"See TrueBlue deals"}
          iconAfter={<FaCaretRight />}
          customStyle="flex items-center justify-center gap-2"
          iconAfterShow={true}
        />
      </div>
    </div>
  );
}

export default SignInDropDown;
