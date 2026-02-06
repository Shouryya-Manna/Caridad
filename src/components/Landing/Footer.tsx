import {
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-20 ">
      <div className="max-w-[1239px] px-1 mx-auto pb-14">
        <div className="text-center mb-9">
          <h2 className="text-[50px] md:text-5xl font-ubuntu-condensed font-bold text-gray-900 mb-4 leading-[1.3]">
            <span className="block">
              Help support
            </span>
            <span className="block">
              women in need
            </span>
          </h2>
          <button className="text-[16px] text-white font-pt-sans font-bold cursor-pointer hover:bg-sea-serpent hover:text-white rounded-4xl h-16.5 w-45 bg-salmon">
            Donate
          </button>
        </div>

        <Separator className="border-t border-black mb-13" />

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-15 mb-8 text-sm md:text-base">
          <a
            href="#"
            className="text-tertiary hover:text-salmon transition-colors duration-300 font-pt-sans font-semibold text-[18px] mb-5"
          >
            What We Do
          </a>
          <a
            href="#"
            className="text-tertiary hover:text-salmon duration-300 font-pt-sans font-semibold  text-[18px] transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-tertiary hover:text-salmon transition-colors duration-300 font-pt-sans font-semibold text-[18px]"
          >
            Get Involved
          </a>
          <a
            href="#"
            className="text-tertiary hover:text-salmon duration-300 font-pt-sans font-semibold text-[18px] transition-colors"
          >
            Membership & Giving
          </a>
        </nav>

        <Separator className="border-t border-black mb-11" />

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="https://facebook.com"
            className="w-15 h-15 rounded-full border border-tertiary flex items-center justify-center hover:bg-salmon hover:text-white transition-colors duration-500"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            className="w-15 h-15 rounded-full border border-tertiary flex items-center justify-center hover:bg-salmon hover:text-white transition-colors duration-500"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            className="w-15 h-15 rounded-full border border-tertiary flex items-center justify-center hover:bg-salmon hover:text-white transition-colors duration-500"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <Separator className="border-t border-black mb-13" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-tertiary">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#"
              className="hover:text-salmon transition-colors duration-300 font-pt-sans font-normal"
            >
              Terms of use
            </a>

            <a
              href="#"
              className="hover:text-salmon transition-colors duration-300 font-pt-sans font-normal"
            >
              Media Kit
            </a>
            <a
              href="#"
              className="hover:text-salmon transition-colors duration-300 font-pt-sans font-normal"
            >
              Contacts
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="font-pt-sans">
              © {currentYear}
              <a
                href="#"
                className="underline hover:text-gray-900 transition-colors pr-1"
              >
                Sunshine. All rights reserved.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
