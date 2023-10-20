import Image from "next/image";
import Link from "next/link";

const MainLinkButton = ({ url, img, title, subtitle }) => {
  return (
    <>
      <Link href={url} className="p-5 border-secondary border rounded-lg">
        <div className="flex justify-center w-full">
          <Image src={img} width={20} height={20} />
        </div>
        <div className="w-full">
          <p className="text-center text-sm font-medium font-righteous mt-2">
            {title}
          </p>
          <p className="text-center text-sm font-medium font-righteous -mt-1">
            {subtitle}
          </p>
        </div>
      </Link>
    </>
  );
};

export default MainLinkButton;
