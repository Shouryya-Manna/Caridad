import Image from "next/image";

export default function SuccessStories() {
  return (
    <section className="max-w-8xl mx-auto w-full">
      <div className="relative h-[600px] w-full">
        <Image
          src="/About-Us/Ab3.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex items-center mx-30">
          <h2 className="max-w-md text-[50px] font-bold leading-tight text-white">
            We are doing the right thing, at the
            right time
          </h2>
        </div>
      </div>

      <div className="mx-36 py-12 max-w-3xl space-y-6">
        <p className="text-lg text-tertiary">
          Like the world-changers who support our
          organization, we are focused on making a
          long-term impact by helping kids living
          in poverty. We have a bold vision:
          graduating healthy, educated, empowered
          and employed young adults from our
          program.
        </p>
        <p className="text-lg text-gray-700">
          The students supported by our programs
          face major barriers to accessing
          education; many are orphaned, living in
          extreme poverty or dealing with other
          difficult family circumstances.
        </p>
      </div>
    </section>
  );
}
