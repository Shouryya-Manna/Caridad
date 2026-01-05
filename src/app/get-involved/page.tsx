import AFooter from "@/components/AboutUs/AFooter";
import GetInvolved from "@/components/GetInvolved/GetInvolved";
import Gift from "@/components/GetInvolved/Gift";
import GStories from "@/components/GetInvolved/Gstories/GStories";
import Protect from "@/components/GetInvolved/Protect";
import SponsorChild from "@/components/GetInvolved/SponsorChild";
import Work from "@/components/GetInvolved/Work";

export default function page() {
  return (
    <div>
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
