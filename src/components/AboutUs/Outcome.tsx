import {
  Smile,
  Leaf,
  Handshake,
} from "lucide-react";

export default function Outcome() {
  return (
    <section className="bg-[#F8F6EF] py-30 max-w-8xl mx-auto w-full px-7.5 text-center">
      <p className="mb-3 text-[20px] font-[401] tracking-normal uppercase">
        Key Outcomes
      </p>
      <h2 className="text-[50px] font-bold mx-auto">
        What makes us different?
      </h2>

      <div className="flex gap-16 my-10 justify-center">
        <div className="flex flex-col gap-5 mx-8">
          <Smile className="mx-auto size-15" />
          <h3 className="text-2xl font-bold text-tertiary">
            Community centers
          </h3>
          <p className="text-tertiary leading-[1.9] max-w-3xl">
            We've built 80 centers globally.
            There, kids get access to education
            centers, medical offices, libraries,
            playgrounds and more.
          </p>
        </div>

        <div className="flex flex-col gap-5 mx-8">
          <Leaf className="mx-auto size-15" />
          <h3 className="text-2xl font-bold text-tertiary">
            Data-driven approach
          </h3>
          <p className="text-tertiary leading-[1.9] max-w-3xl">
            We track measurable progress with a
            research agency to prove we're making
            a real impact on our kids.
          </p>
        </div>

        <div className="flex flex-col gap-5 mx-8">
          <Handshake className="mx-auto size-15" />
          <h3 className="text-2xl font-bold text-tertiary">
            Support
          </h3>
          <p className="text-tertiary leading-[1.9] max-w-3xl">
            Programs change by age and country to
            ensure that our kids graduate healthy,
            educated, empowered, and employed.
          </p>
        </div>
      </div>
    </section>
  );
}
