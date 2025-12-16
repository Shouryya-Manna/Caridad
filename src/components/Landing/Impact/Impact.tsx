import { ImpactData } from "@/data/Impact.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Impact() {
  return (
    <section className="bg-primary py-24">
      {/* Heading */}
      <div className="mx-auto max-w-full text-center mb-16">
        <p className="mb-4 text-lg font-semibold tracking-widest">
          IMPACT
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 mx-auto">
          Helping women now through early <br />
          detection, education, and support
        </h2>
      </div>

      <div className="w-full mx-auto relative px-16">
        <Carousel
          opts={{
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {ImpactData.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-[50%]"
              >
                <div className="flex items-center justify-center text-center p-4 h-full">
                  {/* Image */}
                  <div className="relative w-50 h-80 mb-8 rotate-[-8deg]">
                    <Image
                      src={item.imageUrl}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mx-10 max-w-sm text-left text-wrap text-2xl text-gray-900 leading-snug font-extrabold">
                    {item.data}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
