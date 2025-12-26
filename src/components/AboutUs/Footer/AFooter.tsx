import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function AFooter() {
  return (
    <footer className="max-w-8xl mx-auto w-full px-8 py-12 bg-[#F9F8F3] text-[#1A1A1A] font-sans">
      <div className="relative flex max-w-90 w-41 h-20 justify-start items-center cursor-pointer">
        <Image
          src="/caridad.svg"
          alt="Caridad Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20 mt-10">
        <div className="flex flex-col space-y-4 font-bold text-lg">
          <a
            href="#"
            className="hover:text-[#FEC415] text-tertiary"
          >
            What We Do
          </a>
          <a
            href="#"
            className="hover:text-[#FEC415] text-tertiary"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-[#FEC415] text-tertiary"
          >
            Get Involved
          </a>
          <a
            href="#"
            className="hover:text-[#FEC415] text-tertiary"
          >
            Membership & Giving
          </a>
        </div>

        <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">
          Add impact <br /> to your inbox
        </h2>

        <div className="flex flex-col">
          <div className="relative flex items-center border-b-4 border-black pb-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent w-full outline-none text-lg placeholder-gray-500"
            />
            <button className="bg-tertiary text-white px-8 py-4 cursor-pointer rounded-full h-15 w-40 font-bold hover:bg-[#FEC415] transition-colors">
              Send
            </button>
          </div>
          <p className="text-sm mt-1 text-tertiary">
            We hate spam, and we respect your
            privacy!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-8">
        <div className="text-sm">
          <div className="flex space-x-4 mb-2">
            <a
              href="#"
              className="hover:underline"
            >
              Terms of use
            </a>
            <a
              href="#"
              className="hover:underline"
            >
              Media Kit
            </a>
            <a
              href="#"
              className="hover:underline"
            >
              Contacts
            </a>
          </div>
          <p>
            © 2025{" "}
            <span className="underline cursor-pointer">
              VamTam
            </span>
            . All rights reserved.
          </p>
        </div>

        <div className="flex space-x-8">
          <a href="#">
            {/* facebook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="transition-all cursor-pointer duration-300 ease-in-out hover:fill-[#FEC415] size-9 fill-tertiary"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z" />
            </svg>
          </a>
          <a href="#">
            {/* Twitter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="transition-all size-9 cursor-pointer duration-300 ease-in-out hover:fill-[#FEC415] fill-tertiary"
            >
              <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
          </a>
          <a href="#">
            {/* Instagram */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="transition-all size-9 cursor-pointer duration-300 ease-in-out hover:fill-[#FEC415] fill-tertiary"
            >
              <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>{" "}
          </a>
        </div>

        <div className="flex space-x-4">
          <button className="cursor-pointer text-[16px] text-tertiary font-bold hover:bg-black hover:text-white rounded-4xl h-16 w-40 bg-[#FEC415]">
            Donate
          </button>
          <button className="cursor-pointer text-[16px] text-tertiary font-bold hover:bg-black hover:text-white rounded-4xl h-16 w-40 bg-[#FEC415]">
            Take Action
          </button>
        </div>
      </div>
    </footer>
  );
}
