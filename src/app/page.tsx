"use client";
import { getRandomAdvice } from "@/api/adviceClient";
import AdviceCard from "@/components/AdviceCard/AdviceCard";
import { Advice } from "@/interfaces/Advice";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [advice, setAdvice] = useState<Advice>({
    id: 0,
    advice: "",
  });

  const setData = async () => {
    setAdvice({ advice: "", id: 0 });
    setAdvice(await getRandomAdvice());
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <main className="flex justify-center items-center h-screen bg-[#202632] p-3">
      <AdviceCard
        enumeration={advice.id}
        advice={advice.advice}
        onClick={setData}
      />
    </main>
  );
};

export default Home;
