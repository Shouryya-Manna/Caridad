export default function Stories() {
  return (
    <section className="mx-20 my-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground">
            Stories
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Stories of Hope
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="overflow-hidden">
            <img
              src="/Woman5.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-yellow-400 p-10 md:p-14 flex flex-col justify-center">
            <div className="text-6xl font-serif leading-none mb-6">
              “
            </div>

            <p className="text-lg text-gray-900 font-bold leading-relaxed mb-8">
              Being a survivor now, I realized I
              was not educated or aware about what
              breast cancer actually was and how
              it impacted and affected people.
            </p>

            <div className="text-sm text-gray-800">
              <p className="font-semibold">
                Rena Hart
              </p>
              <p className="opacity-80">
                Breast Cancer Survivor & Caregiver
                Supporter
              </p>
            </div>

            <button className="mt-8 w-fit text-sm font-semibold text-black border-b-2 border-black hover:opacity-70 transition">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
