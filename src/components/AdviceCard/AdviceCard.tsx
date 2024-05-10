import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import Loader from "../Loader/Loader";

interface AdviceCardProps {
  enumeration: number;
  advice: string;
  onClick: () => void;
}

const AdviceCard: React.FC<AdviceCardProps> = ({
  enumeration,
  advice,
  onClick,
}) => {
  return (
    <div className="max-w-lg relative rounded-xl shadow-lg bg-[#313A49] p-10 w-full">
      {advice ? (
        <div>
          <h3 className="text-center text-[#53FFAB] uppercase text-xs tracking-[4px] font-semibold">
            Advice #{enumeration}
          </h3>
          <p className="text-2xl text-center text-[#CEE3E9] my-5 font-semibold">
            “{advice}”
          </p>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <Button onClick={onClick} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
      )}

      <div className="p-3">
        <Image
          src="/images/pattern-divider-desktop.svg"
          alt="Divider"
          width={200}
          height={200}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default AdviceCard;
