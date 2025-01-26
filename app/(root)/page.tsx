"use client";
import ContentTabs from "@/components/UI/ContentTabs";
import TabsWaysJetBlue from "@/components/UI/TabsWaysJetBlue";
import { ActiveButtonProvider } from "@/Hooks/useActiveButton";

export default function Home() {
  return (
    <section
      id="home"
      className="relative w-full h-[400px] bg-blue-500 bg-[url(/assets/montain.jpg)] bg-cover bg-top bg-no-repeat">
      {/* Blue Blur Overlay */}
      <div className="absolute inset-0 bg-[#00205B]/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative h-full py-10 flex flex-col justify-start items-center">
        <div className="w-full max-w-4xl px-5 space-y-10">
          <h1 className="text-4xl text-center font-semibold text-white">
            It's so fly to see you.
          </h1>
          <ActiveButtonProvider
            initialActiveButton={"Flight"}
            initialType={"Navigation"}>
            {/* here adding the section of select flight */}
            <TabsWaysJetBlue />
            <ContentTabs />
          </ActiveButtonProvider>
        </div>
      </div>
    </section>
  );
}
