import Charity from "@/components/AboutUs/Charity/Charity";
import Header from "@/components/Landing/Header/Header";
import ScrollToTop from "@/components/Landing/Scroller/ScrollUp";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <div className="p-10"></div>
      <Charity />
      <ScrollToTop />
    </div>
  );
}
