import React from "react";
import DiceSvg from "../DiceSvg/DiceSvg";

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="rounded-full p-4 bg-[#53FFAB] hover:bg-[#3affa0] glow-btn hover:rotate-180 transition duration-300"
      onClick={onClick}
    >
      <DiceSvg width={10} height={10} />
    </button>
  );
};

export default Button;
