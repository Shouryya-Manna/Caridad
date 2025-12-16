import Image from "next/image";

export default function LatestNews() {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="max-w-7xl w-full px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Latest News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-50">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/Can1.jpeg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col min-h-[500px]">
              <p className="text-xs m-4 text-neutral-500 mb-2">
                20 Jun 2020
              </p>

              <h3 className="text-2xl font-bold m-4 hover:text-yellow-400 cursor-pointer">
                How a First-Time Streamer—and a
                surprise visit from Dr.
                Lupo—Raised $12,000 for Research
              </h3>

              <button className="text-md cursor-pointer font-bold text-left mx-4">
                Read more
              </button>
            </div>
          </div>

          <div>
            {/* Content */}
            <div className="p-5 flex flex-col min-h-[500px]">
              <p className="text-xs m-4 text-neutral-500 mb-2">
                20 Jun 2020
              </p>

              <h3 className="text-2xl font-bold m-4 hover:text-yellow-400 cursor-pointer">
                COVID-19 and Breast Cancer Care:
                What Patients Need to Know
              </h3>

              <button className="text-md cursor-pointer font-bold text-left mx-4">
                Read more
              </button>
            </div>
            {/* Image */}
            <div className="relative  aspect-square overflow-hidden">
              <Image
                src="/Can2.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50">
            {/* Image */}
            <div className="relative  aspect-square overflow-hidden">
              <Image
                src="/Can3.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col min-h-[500px]">
              <p className="text-xs m-4 text-neutral-500 mb-2">
                20 Jun 2020
              </p>

              <h3 className="text-2xl font-bold m-4 hover:text-yellow-400 cursor-pointer">
                24 Jul 2020 Caridad-Supported
                Study First to Determine z Risk
                for Women With Gene Mutations, But
                No Family History Read more
              </h3>

              <button className="text-md cursor-pointer font-bold text-left mx-4">
                Read more
              </button>
            </div>
          </div>

          <div>
            {/* Content */}
            <div className="p-5 flex flex-col min-h-[500px]">
              <p className="text-xs m-4 text-neutral-500 mb-2">
                20 Jun 2020
              </p>

              <h3 className="text-2xl font-bold m-4 hover:text-yellow-400 cursor-pointer">
                Treating Triple-Negative Breast
                Cancer: Recent Progress and What’s
                to Come
              </h3>

              <button className="text-md cursor-pointer font-bold text-left mx-4">
                Read more
              </button>
            </div>
            {/* Image */}
            <div className="relative  aspect-square overflow-hidden">
              <Image
                src="/Can4.jpeg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
