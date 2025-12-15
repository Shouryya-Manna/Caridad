import Image from "next/image";

export default function WhereMoneyGoes() {
  return (
    <section className="mx-20 my-20">
      <div className="max-w-5xl mx-auto text-center">
        <p className="mb-4 text- font-bold uppercase">
          Have you made a donation or fundraised
          for us?
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Where your money goes
        </h2>

        <div className="flex items-center justify-center gap-10">
          <div>
            <p className="text-5xl font-bold">
              72%
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Research & Support
            </p>
          </div>

          <div className="relative h-36 w-36">
            <Image
              src="/Ribbon.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-5xl font-bold">
              28%
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Fundraising
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
