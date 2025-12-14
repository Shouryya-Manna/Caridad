import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-primary mx-20 my-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="max-w-2xl">
          {/* "Floating" looking text */}
          <p className="my-6 text-xl font-semibold tracking-wide text-gray-700">
            OUR MISSION IS SIMPLE
          </p>

          <div className="text-9xl font-extrabold text-black">
            Stop <span>deaths </span>
            <span>from </span>
            <span>breast </span>
            <span>cancer</span>
          </div>

          <button className="my-4 text-sm font-bold text-black cursor-pointer">
            Learn more
          </button>
        </div>

        {/* Image div */}
        <div className="relative h-[600px] w-[600px]">
          <Image
            src="/Woman1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
