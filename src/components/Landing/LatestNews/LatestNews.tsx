import Image from "next/image";

export default function LatestNews() {
  return (
    <section className="w-full flex justify-center py-15">
      <div className="max-w-[1239px] mx-7 w-full">
        <h2 className="text-[50px] font-bold mb-22 text-center text-tertiary">
          Latest News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-50">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src="/IMG6.jpg"
                alt=""
                fill
                className="object-cover transition-all duration-150 group-hover:grayscale-60"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col min-h-[570px]">
              <p className="text-[16px] mx-4 mt-1 text-tertiary mb-2">
                20 Jun 2020
              </p>

              <h3 className="text-[24px] leading-snug font-bold m-4 transition-colors duration-300 hover:text-yellow-400 cursor-pointer">
                How a First-Time Streamer—and a
                surprise visit from Dr.
                Lupo—Raised $12,000 for Research
              </h3>

              <button className="text-[16px] underline  text-tertiary underline-offset-9 decoration-yellow-200 cursor-pointer font-bold text-left mx-4">
                Read more
              </button>
            </div>
          </div>

          <div>
            {/* Content */}
            <div className="p-5 flex flex-col min-h-[570px]">
              <p className="text-[16px] mx-4 mt-1 text-tertiary mb-2">
                20 Jun 2020
              </p>

              <h3 className="text-[24px] leading-snug font-bold m-4 transition-colors duration-300  hover:text-yellow-400 cursor-pointer">
                COVID-19 and Breast Cancer Care:
                What Patients Need to Know
              </h3>

              <button className="text-[16px] underline transition-colors duration-300 text-tertiary underline-offset-9 decoration-yellow-200 cursor-pointer font-bold text-left mx-4">
                Read more
              </button>
            </div>
            {/* Image */}
            <div className="relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src="/IMG7.svg"
                alt=""
                fill
                className="object-cover transition-all duration-150 group-hover:grayscale-60"
              />
            </div>
          </div>

          <div className="bg-gray-50">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src="/IMG8.svg"
                alt=""
                fill
                className="object-cover transition-all duration-150 group-hover:grayscale-60"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col min-h-[570px]">
              <p className="text-[16px] mx-4 mt-1 text-tertiary mb-2">
                20 Jun 2020
              </p>

              <h3 className="text-[24px] leading-snug font-bold m-4 transition-colors duration-300 hover:text-yellow-400 cursor-pointer">
                24 Jul 2020 Caridad-Supported
                Study First to Determine z Risk
                for Women With Gene Mutations, But
                No Family History Read more
              </h3>

              <button className="text-[16px] underline  text-tertiary underline-offset-9 decoration-yellow-200 cursor-pointer font-bold text-left mx-4">
                Read more
              </button>
            </div>
          </div>

          <div>
            {/* Content */}
            <div className="p-5 flex flex-col min-h-[570px]">
              <p className="text-[16px] mx-4 mt-1 text-tertiary mb-2">
                20 Jun 2020
              </p>

              <h3 className="text-[24px] leading-snug font-bold m-4 transition-colors duration-300 hover:text-yellow-400 cursor-pointer">
                Treating Triple-Negative Breast
                Cancer: Recent Progress and What’s
                to Come
              </h3>

              <button className="text-[16px] underline  text-tertiary underline-offset-9 decoration-yellow-200 cursor-pointer font-bold text-left mx-4">
                Read more
              </button>
            </div>
            {/* Image */}
            <div className="relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src="/IMG5.jpg"
                alt=""
                fill
                className="object-cover transition-all duration-150 group-hover:grayscale-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
