import Image from "next/image";

const MyPoints = ({ title, img, imgSize, value }) => {
  return (
    <div className="flex justify-between items-center border-2 border-black p-5 rounded-lg w-full">
      <div className="flex items-center justify-start">
        <Image src={img} width={imgSize} height={imgSize} />

        <div className="px-2 text-base tracking-tighter font-medium">
          {title}
        </div>
      </div>
      <div className="">
        <span className="text-lg font-medium">{value}</span>
        <span className="text-lg text-secondary font-semibold pl-2">P</span>
      </div>
    </div>
  );
};

export default MyPoints;
