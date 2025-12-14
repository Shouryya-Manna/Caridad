import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cause() {
  return (
    <section className="bg-primary mx-20 my-20">
      <div className="text-center mb-12">
        <p className="mb-4 text-sm font-semibold tracking-widest">
          CAUSE
        </p>
        ``
      </div>

      <div className="flex items-center justify-center gap-16 px-10">
        {/* Image */}
        <div className="relative">
          {/* Floating text */}
          <h2 className="absolute -top-12 left-10 max-w-md text-4xl font-extrabold leading-tight">
            Support groundbreaking research to
            help save lives
          </h2>

          <div className="relative h-[500px] w-[700px] shrink-0">
            <Image
              src="/Woman2.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Paragraph div */}
        <div className="max-w-md space-y-6">
          <p className="leading-relaxed">
            So many younger women are being
            diagnosed with breast cancer and are
            dying needlessly. It's critical that
            research is undertaken in this area
            now to help save their lives.
          </p>
          <Button className="cursor-pointer text-black font-bold hover:bg-black hover:text-white rounded-4xl h-14 w-32 bg-yellow-500">
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
