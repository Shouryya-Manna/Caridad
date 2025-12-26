import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cause() {
  return (
    <section className="bg-primary px-6 pt-120">
      <div className="mx-auto flex max-w-[1239px] px-1 flex-col justify-center gap-10 relative">
        <div className="flex items-center gap-14">
          <div className="relative h-[605px] w-[790px] shrink-0">
            <Image
              src="/Landing-Page/IMG2.png"
              alt=""
              fill
              className="object-cover"
            />

            {/* heading */}
            <h2 className="absolute right-[-250px] top-20 z-20 -translate-y-1/2 text-[50px]">
              <p className="mx-auto mb-6 text-[20px] tracking-wide font-[401]">
                CAUSE
              </p>
              <span className="block font-extrabold leading-[1.2] text-tertiary">
                Support
              </span>
              <span className="block font-extrabold leading-[1.2] text-tertiary">
                groundbreaking
              </span>
              <span className="block font-extrabold leading-[1.2] text-tertiary">
                research to help save
              </span>
              <span className="block font-extrabold leading-[1.2] text-tertiary">
                lives
              </span>
            </h2>

            {/* Circle */}
            <div className="absolute bottom-[-70px] right-25 z-50 h-64 w-64 rounded-full bg-tertiary text-white flex items-center justify-center p-5">
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <span className="text-7xl font-bold leading-14">
                    +2
                  </span>
                  <span className="text-7xl font-bold  ml-5 leading-14">
                    M
                  </span>
                </div>
                <div className="max-w-[140px]">
                  <p className="text-[14px] leading-6 tracking-wide text-left font-light text-white">
                    Caridad has provided over 2
                    million breast health
                    <br />
                    resources to women in need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Paragraph div */}
          <div className="max-w-lg mt-30">
            <p className="text-[16px] leading-[1.83] text-tertiary">
              So many younger women are being
              diagnosed with breast cancer and are
              dying needlessly. It's critical that
              research is undertaken in this area
              now to help save their lives.
            </p>
            <Button className="my-5 mt-8 cursor-pointer text-[16px] text-tertiary font-bold hover:bg-black hover:text-white rounded-4xl h-14 w-40 bg-[#FEC415]">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
