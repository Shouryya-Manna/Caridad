import { Button } from "@/components/ui/button";

import Sponsor2 from "../Sponsor2/Sponsor2";
import SponsorAmount from "@/components/Global/SponsorAmount";

export default function Sponsor() {
  return (
    <section className="max-w-8xl mx-auto w-full px-7.5 bg-[#F8F9F3] py-40">
      <p className="mb-3 text-[20px] font-[401] tracking-normal uppercase text-tertiary">
        Donate Now
      </p>
      <h2 className="text-[50px] font-bold text-tertiary">
        Sponsor our work
      </h2>
      <SponsorAmount />
      <p className="uppercase text-tertiary text-xl font-semibold mt-4">
        or:
      </p>
      <h2 className="text-[50px] font-bold text-tertiary">
        Be the change for one child:
      </h2>
      <button className="mt-8 font-bold text-tertiary text-[16px] cursor-pointer underline underline-offset-9 text-left decoration-yellow-200">
        View all children
      </button>
    </section>
  );
}
