import { ImpactData } from "@/data/Impact.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Impact() {
  return (
    <section className="relative w-full bg-primary py-24 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto max-w-full text-center mb-16 md:mb-20">
        <p className="mb-4 text-xs font-semibold tracking-widest uppercase text-gray-700">
          IMPACT
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Helping women now through early <br />
          detection, education, and support
        </h2>
      </div>

      <div className="w-full relative px-8 md:px-12 lg:px-16">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {ImpactData.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="flex flex-col items-center text-center px-6 md:px-8 lg:px-12">
                  {/* Image  */}
                  <div className="relative w-64 h-80 mb-8 rotate-[-8deg] shadow-2xl">
                    <Image
                      src={item.imageUrl}
                      alt="impact"
                      fill
                      className="object-cover object-top rounded-lg"
                    />
                  </div>

                  <p className="text-lg font-medium text-gray-900 leading-relaxed max-w-sm">
                    {item.data}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
