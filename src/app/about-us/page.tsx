import Charity from "@/components/AboutUs/Charity/Charity";
import AFooter from "@/components/AboutUs/Footer/AFooter";
import OurCauses from "@/components/AboutUs/OurCauses/OurCauses";
import Outcome from "@/components/AboutUs/Outcome/Outcome";
import Sponsor from "@/components/AboutUs/Sponsor/Sponsor";
import Sponsor2 from "@/components/AboutUs/Sponsor2/Sponsor2";
import SuccessStories from "@/components/AboutUs/SuccessStories/SuccessStories";
import Team from "@/components/AboutUs/Team/Team";
import DynamicHeader from "@/components/Global/DynamicHeader";
import Header from "@/components/Landing/Header/Header";
import ScrollToTop from "@/components/Landing/Scroller/ScrollUp";

export default function page() {
  return (
    <div>
      <DynamicHeader />
      <Charity />
      <SuccessStories />
      <Outcome />
      <Team />
      <Sponsor />
      <Sponsor2 />
      <OurCauses />
      <AFooter />
      <ScrollToTop />
    </div>
  );
}
