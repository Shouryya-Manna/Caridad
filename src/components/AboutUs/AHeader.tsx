import DynamicHeader from "../Global/Header/DynamicHeader";
import HeaderBackground from "../Global/Header/HeaderBackground";

export default function AHeader() {
  return (
    <section className="relative w-full h-[400px]">
      {/* HEADER ON TOP */}
      <DynamicHeader className="absolute top-0 left-0 w-full z-50 bg-transparent" />

      <HeaderBackground
        imageSrc="/About-Us/AboutHeader.jpg"
        bigText1="We make the best"
        bigText2="for all our children"
        topic="About Us"
      />
    </section>
  );
}
