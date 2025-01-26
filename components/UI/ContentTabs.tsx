import { useActiveButton } from "@/Hooks/useActiveButton";
import FlightTabs from "./Tab/FlightTabs";

function ContentTabs() {
  const { activeButton } = useActiveButton();
  return (
    <section className="w-full py-5 px-2 bg-slate-200 rounded-lg">
      {(() => {
        switch (activeButton) {
          case "Flight":
            return <FlightTabs />;
          default:
            return <h1>{activeButton}</h1>;
        }
      })()}
    </section>
  );
}

export default ContentTabs;
