import { ImpactData } from "@/data/Impact.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Impact() {
  const rotations = [
    "rotate-[-9deg]",
    "rotate-[-7deg]",
    "rotate-[8deg]",
  ];
  const maxWidths = [
    "max-w-35",
    "max-w-50",
    "max-w-52",
  ];
  return (
    <section className="bg-primary pt-32 pb-15 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto  text-center mb-16">
        <p className="text-sea-green mb-5 text-[20px] font-pt-sans font-normal tracking-normal uppercase">
          IMPACT
        </p>
        <h2 className="text-[50px] leading-15 text-tertiary font-ubuntu-condensed font-bold mb-16 mx-auto max-w-5xl wrap-break-word">
          Helping women now through early
          detection, education, and support
        </h2>
      </div>

      <div className="w-full">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {[...ImpactData, ...ImpactData].map(
              (item, index) => {
                const rotate =
                  rotations[
                    index % rotations.length
                  ];

                return (
                  <CarouselItem
                    key={index}
                    className="basis-full lg:basis-[43%]"
                  >
                    <div className="flex items-center gap-12 py-18 px-9">
                      <div
                        className={`relative shrink-0 w-55 h-75 ${rotate}`}
                      >
                        <Image
                          src={item.imageUrl}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div
                        className={
                          maxWidths[
                            index %
                              maxWidths.length
                          ]
                        }
                      >
                        <p className="text-[24px] leading-[1.3] font-pt-sans font-bold text-tertiary">
                          {item.data}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              }
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
