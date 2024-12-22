import { Images } from "@/constants/images";

export default function BgItems() {
  return (
    <>
      <img
        src={Images.circle}
        alt="circles"
        className="absolute -top-20 left-5 z-0  object-contain"
      />
      <img
        src={Images.circle}
        alt="circles"
        className="absolute top-1/2 left-3/4 z-0  object-contain"
      />
      <img
        src={Images.topLine}
        alt="top line"
        className="absolute top-16 -right-24 z-0  object-contain"
      />
      <img
        src={Images.bottomLine}
        alt="bottomLine line"
        className="absolute bottom-0 -left-0 z-0  object-contain"
      />
    </>
  );
}
