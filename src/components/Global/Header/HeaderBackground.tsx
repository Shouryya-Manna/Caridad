import Image, {
  StaticImageData,
} from "next/image";

type HeaderBackgroundProps = {
  imageSrc?: string | StaticImageData;
  topic?: string;
  bigText1?: string;
  bigText2?: string;
};

export default function HeaderBackground({
  imageSrc,
  bigText1,
  topic,
  bigText2,
}: HeaderBackgroundProps) {
  return (
    <section className="max-w-full w-full">
      {/* Header image  */}
      {imageSrc && (
        <div className="relative w-full h-[410px]">
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className="object-cover z-0"
          />
        </div>
      )}

      {/* Header Topic */}
      {topic && (
        <div className="absolute z-10 px-7.5 top-[200px] text-2xl leading-none text-white space-y-3">
          <div>{topic}</div>
        </div>
      )}

      {/* Header Text */}
      {bigText1 && (
        <div className="absolute z-10 px-7.5 top-[290px] text-[70px] font-bold leading-none text-tertiary space-y-3">
          <span className="block bg-[#F8F9F3] w-fit px-5">
            {bigText1}
          </span>
          <span className="block bg-[#F8F9F3] w-fit px-5">
            {bigText2}
          </span>
        </div>
      )}
    </section>
  );
}
