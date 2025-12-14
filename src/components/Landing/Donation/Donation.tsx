import Image from "next/image";

export default function Donation() {
  return (
    <section className="mx-20 my-20">
      <div className="mx-auto flex flex-col max-w-6xl items-center justify-center gap-10 ">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground">
            GET INVOLVED
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            What to help
          </h2>
        </div>
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
