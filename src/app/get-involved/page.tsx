import AFooter from "@/components/AboutUs/AFooter";
import GetInvolved from "@/components/GetInvolved/GetInvolved";
import Gift from "@/components/GetInvolved/Gift";
import GStories from "@/components/GetInvolved/Gstories/GStories";
import Protect from "@/components/GetInvolved/Protect";
import SponsorChild from "@/components/GetInvolved/SponsorChild";
import Work from "@/components/GetInvolved/Work";
import Header from "@/components/Landing/Header/Header";

export default function page() {
  return (
    <div>
      <Header />
      <Work />
      <SponsorChild />
      <Gift />
      <GStories />
      <GetInvolved />
      <Protect />
      <AFooter />
    </div>
  );
}
