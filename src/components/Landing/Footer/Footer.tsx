import {
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help support
            <br />
            women in need
          </h2>
          <button className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white">
            Donate
          </button>
        </div>

        <Separator className="border-t border-black mb-8" />

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-8 text-sm md:text-base">
          <a
            href="#"
            className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
          >
            What We Do
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
          >
            Get Involved
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
          >
            Membership & Giving
          </a>
        </nav>

        <Separator className="border-t border-black mb-8" />

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://facebook.com"
            className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <Separator className="border-t border-black mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-700">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
            >
              Terms of use
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
            >
              Media Kit
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
            >
              Contacts
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>
              © {currentYear}
              <a
                href="#"
                className="underline hover:text-gray-900 transition-colors"
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
