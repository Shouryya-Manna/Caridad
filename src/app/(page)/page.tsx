import Cause from "@/components/Landing/Cause/Cause";
import Check from "@/components/Landing/Check/Check";
import Donation from "@/components/Landing/Donation/Donation";
import Events from "@/components/Landing/Events/Events";
import Footer from "@/components/Landing/Footer/Footer";
import Header from "@/components/Landing/Header/Header";
import Help from "@/components/Landing/Help/Help";
import Impact from "@/components/Landing/Impact/Impact";
import LatestNews from "@/components/Landing/LatestNews/LatestNews";
import Mission from "@/components/Landing/Mission/Mission";
import Percentage from "@/components/Landing/Percentage/Percentage";
import Stories from "@/components/Landing/Stories/Stories";

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
    </div>
  );
}
