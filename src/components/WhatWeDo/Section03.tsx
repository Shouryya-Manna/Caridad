import Image from "next/image";

export default function Section03() {
  return (
    <section className="max-w-8xl w-full px-7.5 lg:py-60 my-20 bg-[#F8F9F3] relative">
      <div className="flex flex-col lg:flex-row md:flex-row gap-25">
        <div className="lg:basis-[45%]">
          <h2 className="mb-5 text-tertiary text-xl font-medium">
            02
          </h2>
          <p className="lg:text-5xl md:text-3xl text-[28px] text-tertiary font-bold max-w-xl leading-[1.2]">
            Build the healthy environments
          </p>
        </div>
        <div className="lg:basis-[68%] w-full pt-15">
          <p className="text-base max-w-2xl text-tertiary mb-10 leading-[1.8]">
            Working together, we invest in the
            lives of children and youth,{" "}
            <span className="font-bold">
              build the healthy environments{" "}
            </span>{" "}
            they need to thrive, and empower them
            to create lasting change in their own
            lives and communities.
          </p>
          <p className="text-base max-w-2xl text-tertiary mb-10 leading-[1.8]">
            We pay school fees and provide
            uniforms and other essentials to help
            orphans fulfill their academic
            potential and escape from a life in
            poverty. More than{" "}
            <span className="font-bold">80%</span>{" "}
            of our former beneficiaries manage the
            transition to higher education.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-80 right-5 w-60 h-[380px]">
        <Image
          src="/What-We-Do/Wwd05.webp"
          alt=""
          width={520}
          height={380}
          className="object-contain"
        />
      </div>
    </section>
  );
}
