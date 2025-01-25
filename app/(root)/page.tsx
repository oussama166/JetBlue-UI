import TabsWaysJetBlue from "@/components/UI/TabsWaysJetBlue";

export default function Home() {
  return (
    <section
      id="home"
      className="relative w-full h-[350px] overflow-hidden bg-blue-500 bg-[url(/assets/hawai.jpg)] bg-cover bg-no-repeat">
      {/* Blue Blur Overlay */}
      <div className="absolute inset-0 bg-[#00205B]/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative h-full my-5 flex flex-col justify-start items-center">
        <div className="w-full max-w-4xl px-5 space-y-10">
          <h1 className="text-4xl text-center font-semibold text-white">
            It's so fly to see you.
          </h1>
          {/* here adding the section of select flight */}
          <TabsWaysJetBlue />
        </div>
      </div>
    </section>
  );
}
