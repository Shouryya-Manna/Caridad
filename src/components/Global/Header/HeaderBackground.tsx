import Image, {
  StaticImageData,
} from "next/image";

type HeaderBackgroundProps = {
  imageSrc?: string | StaticImageData;
  topic?: string;
  bigText?: string;
};

export default function HeaderBackground({
  imageSrc,
  bigText,
  topic,
}: HeaderBackgroundProps) {
  return (
    <section className="max-w-full w-full">
      {/* Header image  */}
      {imageSrc && (
        <div className="relative">
          <Image
            src={imageSrc}
            alt=""
            className="object-cover"
          />
        </div>
      )}

      {/* Header Topic */}
      {topic && <div></div>}

      {/* Header Text */}
      {bigText && (
        <div className="absolute z-10 px-7.5 top-190 text-[70px] font-bold leading-none text-tertiary space-y-3">
          <span className="block bg-[#F8F9F3] w-fit px-5">
            {bigText}
          </span>
        </div>
      )}
    </section>
  );
}
