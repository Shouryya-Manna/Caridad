import Charity from "@/components/AboutUs/Charity/Charity";
import SuccessStories from "@/components/AboutUs/SuccessStories/SuccessStories";
import Header from "@/components/Landing/Header/Header";
import ScrollToTop from "@/components/Landing/Scroller/ScrollUp";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Charity />
      <SuccessStories />
      <ScrollToTop />
    </div>
  );
}
