export default function Section01() {
  return (
    <section className="max-w-8xl w-full px-7.5 py-20 my-20">
      <div className="flex flex-col lg:flex-row md:flex-row">
        <div className="lg:basis-[68%] lg:order-1 md:order-1 order-2 w-full pt-15">
          <p className="text-base max-w-xl text-tertiary mb-10 leading-[1.8]">
            The students supported by our programs
            face major barriers to{" "}
            <span className="font-bold">
              accessing education
            </span>
            ; many are orphaned, living in extreme
            poverty or dealing with other
            difficult family circumstances.
          </p>
          <button className="cursor-pointer text-[16px] text-white font-bold hover:bg-sea-serpent hover:text-white rounded-4xl h-16 w-40 bg-salmon">
            Donate
          </button>
        </div>
        <div className="order-1 lg:order-2 lg:basis-[32%]">
          <h2 className="mb-5 text-tertiary text-xl font-medium">
            01
          </h2>
          <p className="lg:text-5xl md:text-3xl text-[28px] text-tertiary font-bold max-w-sm leading-[1.2]">
            Children education
          </p>
        </div>
      </div>
    </section>
  );
}
