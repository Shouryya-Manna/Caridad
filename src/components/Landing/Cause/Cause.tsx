import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cause() {
  return (
    <section className="bg-primary px-7 pt-120">
      <div className="mx-auto flex max-w-[1239px] px-1 flex-col justify-center gap-10 relative">
        <div className="flex items-center gap-15">
          <div className="relative h-[600px] w-[800px] shrink-0">
            <Image
              src="/IMG2.png"
              alt=""
              fill
              className="object-cover"
            />

            {/* heading */}
            <h2 className="absolute right-[-250px] top-20 z-20 -translate-y-1/2 text-[50px]">
              <p className="mx-auto mb-6 text-[20px] tracking-wide">
                CAUSE
              </p>
              <span className="block font-extrabold leading-[1.2] text-[#1D1C1C]">
                Support
              </span>
              <span className="block font-extrabold leading-[1.2] text-[#1D1C1C]">
                groundbreaking
              </span>
              <span className="block font-extrabold leading-[1.2] text-[#1D1C1C]">
                research to help save
              </span>
              <span className="block font-extrabold leading-[1.2] text-[#1D1C1C]">
                lives
              </span>
            </h2>

            {/* Circle */}
            <div className="absolute bottom-[-60px] right-20 z-30 h-50 w-50 rounded-full bg-black text-gray-300 flex items-center justify-center p-4">
              <p className="text-center text-sm font-semibold  wrap-break-word">
                Caridad had provided over 2
                million breast health resources to
                women in need
              </p>
            </div>
          </div>

          {/* Paragraph div */}
          <div className="max-w-md mt-30">
            <p className="text-md leading-normal">
              So many younger women are being
              diagnosed with breast cancer and are
              dying needlessly. It's critical that
              research is undertaken in this area
              now to help save their lives.
            </p>
            <Button className="my-5 cursor-pointer text-black font-bold hover:bg-black hover:text-white rounded-4xl h-14 w-36 bg-[#FEC415]">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
