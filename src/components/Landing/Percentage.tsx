import Image from "next/image";

export default function WhereMoneyGoes() {
  return (
    <section className="mx-20 mt-15 mb-30">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-3 text-[20px] font-pt-sans font-medium uppercase">
          Have you made a donation or fundraised
          for us?
        </p>

        <h2 className="text-[50px] font-ubuntu-condensed font-bold mb-16">
          Where your money goes
        </h2>

        <div className="flex items-center justify-center gap-15 pt-10">
          <div>
            <p className="text-[70px] font-ubuntu-condensed font-bold">
              72%
            </p>
            <p className="text-[16px] text-tertiary font-pt-sans text-left">
              Research & Support
            </p>
          </div>

          <div className="relative h-18 w-38">
            <Image
              src="/Landing-Page/ribbon.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-[70px] font-ubuntu-condensed font-bold">
              28%
            </p>
            <p className="text-[16px] text-tertiary font-pt-sans text-left">
              Fundraising
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
