import Cause from "@/components/Landing/Cause/Cause";
import Donation from "@/components/Landing/Donation/Donation";
import Events from "@/components/Landing/Events/Events";
import Footer from "@/components/Landing/Footer/Footer";
import Header from "@/components/Landing/Header/Header";
import Help from "@/components/Landing/Help/Help";
import Impact from "@/components/Landing/Impact/Impact";
import LatestStories from "@/components/Landing/LatestStories/LatestStories";
import Mission from "@/components/Landing/Mission/Mission";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Mission />
      <Cause />
      <Help />
      <Impact />
      <Donation />
      <Events />
      <LatestStories />
      <Donation />
      <Footer />
    </div>
  );
}
