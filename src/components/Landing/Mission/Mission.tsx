import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-primary mx-20 my-20">
      <div className="mx-auto flex max-w-9xl items-center justify-center gap-10 ">
        <div className="max-w-2xl">
          {/* "Floating" looking text */}
          <p className="mb-4 text-sm font-semibold tracking-widest">
            OUR MISSION IS SIMPLE
          </p>

          <div className="text-9xl font-extrabold text-black">
            Stop <br />
            deaths <br />
            from <br />
            breast <br />
            cancer
          </div>

          <button className="my-4 text-sm font-bold text-black cursor-pointer">
            Learn more
          </button>
        </div>

        {/* Image div */}
        <div className="relative h-[600px] w-[600px] shrink-0">
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
