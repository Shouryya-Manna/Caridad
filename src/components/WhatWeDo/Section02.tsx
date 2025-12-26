import Image from "next/image";

export default function Section02() {
  return (
    <section className="max-w-8xl w-full px-7.5">
      <div>
        <Image
          src="/What-We-Do/Wwd01.jpg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src="/What-We-Do/Wwd02.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src="/What-We-Do/Wwd03.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
