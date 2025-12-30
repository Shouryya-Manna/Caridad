import Charity from "@/components/AboutUs/Charity";
import AFooter from "@/components/AboutUs/AFooter";
import OurCauses from "@/components/AboutUs/OurCauses";
import Outcome from "@/components/AboutUs/Outcome";
import Sponsor2 from "@/components/AboutUs/Sponsor2";
import SuccessStories from "@/components/AboutUs/SuccessStories";
import Team from "@/components/AboutUs/Team";
import DynamicHeader from "@/components/Global/Header/DynamicHeader";
import ScrollToTop from "@/components/Global/ScrollUp";
import Sponsor from "@/components/AboutUs/Sponsor";

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
