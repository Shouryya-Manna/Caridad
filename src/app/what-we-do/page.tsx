import AFooter from "@/components/AboutUs/Footer/AFooter";
import Sponsor2 from "@/components/AboutUs/Sponsor2/Sponsor2";
import Header from "@/components/Landing/Header/Header";
import Precident from "@/components/WhatWeDo/Precident";
import Section01 from "@/components/WhatWeDo/Section01";
import Section02 from "@/components/WhatWeDo/Section02";
import Section03 from "@/components/WhatWeDo/Section03";
import Section04 from "@/components/WhatWeDo/Section04";

export default function page() {
  return (
    <div>
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Sponsor2 />
      <Precident />
      <AFooter />
    </div>
  );
}
