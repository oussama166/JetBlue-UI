import { ButtonLink } from "@/lib/designPattern/Button";
import Airplane from "./DynamicIcon/Airplane";
import AirplaneHotel from "./DynamicIcon/AirplaneHotel";
import Cars from "./DynamicIcon/Cars";
import Stays from "./DynamicIcon/Stays";

function TabsWaysJetBlue() {
  return (
    <div className="flex gap-10 justify-center w-full">
      <ButtonLink
        style={
          "inline-flex items-center justify-center cursor-pointer gap-2 text-white"
        }
        content={"Flight"}
        addIconBefore={true}
        IconBefore={<Airplane style="fill-white" />}
        underlineActive={true}
      />
      <ButtonLink
        style={
          "inline-flex items-center justify-center cursor-pointer gap-2 text-white"
        }
        content={"Flight + Hotel"}
        addIconBefore={true}
        IconBefore={<AirplaneHotel style="fill-white" />}
        underlineActive={true}
      />
      <ButtonLink
        style={
          "inline-flex items-center justify-center cursor-pointer gap-2 text-white"
        }
        content={"Cars"}
        addIconBefore={true}
        IconBefore={<Cars style="fill-white" />}
        underlineActive={true}
      />
      <ButtonLink
        style={
          "inline-flex items-center justify-center cursor-pointer gap-2 text-white"
        }
        content={"Stays"}
        addIconBefore={true}
        IconBefore={<Stays style="fill-white" />}
        underlineActive={true}
      />
    </div>
  );
}

export default TabsWaysJetBlue;
