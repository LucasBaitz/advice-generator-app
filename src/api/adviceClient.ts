import { Advice } from "@/interfaces/Advice";

export const getRandomAdvice = async (): Promise<Advice> => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    return data.slip;
};