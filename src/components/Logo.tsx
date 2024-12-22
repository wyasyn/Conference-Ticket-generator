import { Images } from "@/constants/images";

export default function Logo() {
  return (
    <div className="flex justify-center mt-8">
      <img src={Images.FullLogo} alt="logo" className="object-contain" />
    </div>
  );
}
