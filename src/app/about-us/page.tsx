import Charity from "@/components/AboutUs/Charity/Charity";
import OurCauses from "@/components/AboutUs/OurCauses/OurCauses";
import Outcome from "@/components/AboutUs/Outcome/Outcome";
import Sponsor from "@/components/AboutUs/Sponsor/Sponsor";
import Sponsor2 from "@/components/AboutUs/Sponsor2/Sponsor2";
import SuccessStories from "@/components/AboutUs/SuccessStories/SuccessStories";
import Team from "@/components/AboutUs/Team/Team";
import Header from "@/components/Landing/Header/Header";
import ScrollToTop from "@/components/Landing/Scroller/ScrollUp";

export default function page() {
  return (
    <div>
      <Header />
      <Charity />
      <SuccessStories />
      <Outcome />
      <Team />
      <Sponsor />
      <Sponsor2 />
      <OurCauses />
      <ScrollToTop />
    </div>
  );
}
