import Charity from "@/components/AboutUs/Charity";
import AFooter from "@/components/AboutUs/AFooter";
import OurCauses from "@/components/AboutUs/OurCauses";
import Outcome from "@/components/AboutUs/Outcome";
import Sponsor from "@/components/AboutUs/Sponsor/Sponsor";
import Sponsor2 from "@/components/AboutUs/Sponsor2";
import SuccessStories from "@/components/AboutUs/SuccessStories";
import Team from "@/components/AboutUs/Team";
import DynamicHeader from "@/components/Global/Header/DynamicHeader";
import Header from "@/components/Landing/Header/Header";
import ScrollToTop from "@/components/Global/ScrollUp";

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
