export default function Stories() {
  return (
    <section className="mt-20 mb-18 mx-7">
      <div className="max-w-[1239px] mx-auto ">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="mb-3 text-[20px] font-[401] tracking-widest uppercase">
            Stories
          </p>
          <h2 className="text-[50px] text-[#1D1C1C] font-bold mb-16 mx-auto">
            Stories of Hope
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
          <div className="overflow-hidden">
            <img
              src="/IMG9.jpg"
              alt=""
              className="w-full h-full object-cover scale-110"
            />
          </div>

          <div className="bg-[#FEC415] p-10 md:p-14 flex flex-col justify-center">
            <div className="text-6xl font-serif leading-none mb-3">
              “
            </div>

            <p className="text-[24px] text-[1D1C1C] font-bold leading-[1.3] mb-8">
              "Being a survivor now, I realized I
              was not educated or aware about what
              breast cancer actually was and how
              it impacted and affected people."
            </p>

            <div className="text-[16px] text-[#1D1C1C] flex flex-col gap-2.5">
              <p className="">Rena Hart</p>
              <p>
                Breast Cancer Survivor & Caregiver
                Supporter
              </p>
            </div>

            <button className="mt-8 w-fit text-[16px] font-bold text-[#1D1C1C] border-b-2 border-black cursor-pointer">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
