import styles from "@/styles/State.module.css";

import { NextPage } from "next";
import { useState } from "react";

const State: NextPage = () => {
  const [counter, setCounter] = useState(0);

  const isEven = (value: number): boolean => value % 2 === 0;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center w-1/2 p-10 bg-white rounded-lg shadow-lg h-1/2 shadow-gray-500">
        <div className="flex flex-row items-center gap-10 p-5 border-2 rounded-lg">
          <button className={styles.button} onClick={() => setCounter((state) => state + 1)}>
            Plus
          </button>
          <button className={styles.button} onClick={() => setCounter((state) => state - 1)}>
            Minus
          </button>

          <div
            className={`flex items-center justify-center text-white bg-gray-500 transition-all rounded-md duration-75 ${
              isEven(counter) ? "w-14 h-14" : "w-20 h-20"
            }`}
          >
            <span className="text-xl font-bold text-center">{counter}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
