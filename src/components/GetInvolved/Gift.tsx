import Image from "next/image";
import CustomButton from "../Global/CustomButton";

export default function Gift() {
  return (
    <section className="max-w-8xl mx-auto w-full grid grid-cols-3 px-7.5 mt-30 py-30">
      <div className="flex flex-col justify-center py-30">
        <p className="mb-3 text-[20px] font-[401] uppercase">
          03
        </p>

        <h2 className="text-[50px] font-bold leading-tight text-tertiary">
          Give a gift. Change a life.
        </h2>

        <p className="text-base mt-10 leading-[1.8] text-tertiary min-h-20 max-w-xs">
          Large or small, your donation helps kids
          break the cycle of poverty.
        </p>
        <CustomButton
          className="h-16 w-45 bg-[#FEC415] border-0"
          buttonName="Shop"
        />
      </div>

      <div className="flex items-start">
        <div className="relative h-[300px] w-[290px]">
          <Image
            src="/Get-Involved/GI01.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-[380px] w-[290px]">
          <Image
            src="/Get-Involved/GI02.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
