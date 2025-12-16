import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cause() {
  return (
    <section className="bg-primary pt-90">
      <div className="mx-auto flex max-w-7xl flex-col justify-center gap-10 relative">
        <p className="mx-auto mb-10 text-xl font-semibold tracking-widest">
          CAUSE
        </p>

        <div className="flex items-center gap-20">
          <div className="relative h-[500px] w-[700px] shrink-0">
            <Image
              src="/Woman2.png"
              alt=""
              fill
              className="object-cover"
            />

            {/* heading */}
            <h2 className="absolute right-[-350px] top-10 z-20 -translate-y-1/2 text-[50px] font-extrabold leading-[1.05] text-black">
              <span className="block">
                Support groundbreaking
              </span>
              <span className="block">
                research to help save
              </span>
              <span className="block">lives</span>
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
          <div className="max-w-md space-y-8">
            <p className="text-lg leading-relaxed">
              So many younger women are being
              diagnosed with breast cancer and are
              dying needlessly. It's critical that
              research is undertaken in this area
              now to help save their lives.
            </p>
            <Button className="cursor-pointer text-black font-bold hover:bg-black hover:text-white rounded-4xl h-14 w-36 bg-yellow-500">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
