import Cause from "@/components/Landing/Cause";
import Check from "@/components/Landing/Check";
import Donation from "@/components/Landing/Donation";
import Events from "@/components/Landing/Events";
import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header/Header";
import Help from "@/components/Landing/Help";
import Impact from "@/components/Landing/Impact";
import LatestNews from "@/components/Landing/LatestNews";
import Mission from "@/components/Landing/Mission";
import Percentage from "@/components/Landing/Percentage";
import ScrollToTop from "@/components/Global/ScrollUp";
import Stories from "@/components/Landing/Stories";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Mission />
      <Cause />
      <Help />
      <Impact />
      <Donation />
      <Check />
      <Events />
      <Stories />
      <LatestNews />
      <Percentage />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
