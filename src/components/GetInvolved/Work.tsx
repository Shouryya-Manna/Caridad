import SponsorAmount from "../Global/SponsorAmount";

export default function Work() {
  return (
    <section className="w-full bg-primary">
      <div className="max-w-8xl w-full mx-auto px-7.5 py-32">
        <h2 className="mb-2 text-tertiary text-xl font-medium text-center">
          01
        </h2>

        <h2 className="text-center text-[70px] font-extrabold text-tertiary mb-3">
          Sponsor our work
        </h2>

        <p className="text-center max-w-8xl mx-auto text-base text-tertiary mb-20">
          Please click the button below to make
          your donation today. Your donation will
          support one child in need.
        </p>
        <div className="flex justify-around gap-120 my-15">
          <span className="text-yellow-200">
            Raised: $0
          </span>
          <span className="text-[#7A8897]">
            Goal: $100,000
          </span>
        </div>
        <div className="flex justify-center">
          <SponsorAmount />
        </div>
      </div>
    </section>
  );
}
