import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const DigimonIndex: NextPage = () => {
  const [counter, setCounter] = useState(5);
  const [digimonData, setDigimonData] = useState<any>(null);

  useEffect(() => {
    setInterval(() => setCounter((state) => (state === 0 ? 5 : state - 1)), 1000);
  }, []);

  useEffect(() => {
    if (counter === 0 || !digimonData) {
      getData();
    }
  }, [counter]);

  const getData = async () => {
    const { data } = await axios.get("https://digimon-api.vercel.app/api/digimon");
    const randomIndex = Math.round(Math.random() * data.length);
    const digimon = data[randomIndex];

    setDigimonData(digimon);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center p-10 bg-white rounded-lg">
        {digimonData && (
          <>
            <img src={digimonData.img} alt="Digimon Profile" className="mb-10" />

            <span className="mb-5 text-xl font-bold">{digimonData.name}</span>

            <span>LEVEL</span>
            <span>{digimonData.level}</span>
          </>
        )}

        <span className="mt-10">Akan refresh pada {counter}</span>
      </div>
    </div>
  );
};

export default DigimonIndex;
