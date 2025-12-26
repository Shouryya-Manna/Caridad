import Image from "next/image";

export default function Section02() {
  return (
    <section className="max-w-8xl w-full px-7.5 mb-40">
      <div className="grid grid-cols-3">
        <div className="relative max-h-50 max-w-70 w-full h-full">
          <Image
            src="/What-We-Do/Wwd01.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-70 w-full h-50 mt-40">
          <Image
            src="/What-We-Do/Wwd02.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-h-50 max-w-105 w-full h-full">
          <Image
            src="/What-We-Do/Wwd03.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
