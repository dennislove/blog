import { useEffect, useState } from 'react';
import 'animate.css';
export const ProgressBar = ({
  percentage,
  color,
  name1,
  name2
}: {
  percentage: number;
  color: string;
  name1: string;
  name2: string;
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start <= percentage) {
        setCurrentPercentage(start);
        start++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust speed of percentage increase
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex items-center justify-center gap-2 py-4 pt-8 ">
      <h3 className=" text-xl">{name1}</h3>
      <div className="relative w-[400px] bg-gray-200 rounded-full h-4 flex items-center">
        {/* The background progress bar */}
        <div
          className="absolute bg-blue-500 h-6 rounded-full transition-all duration-1000"
          style={{ width: `100%`, backgroundColor: `${color}` }}
        ></div>

        {/* The sliding circle */}
        <div
          className="absolute w-6 h-6  border-[4px] border-white rounded-full flex justify-center items-center transition-all duration-1000 animate__animated animate__heartBeat"
          style={{ left: `calc(${currentPercentage}% - 12px)` }} // Offsetting to center the circle
        >
          <span
            className={` text-base font-bold absolute -top-8 flex gap-1 `}
            style={{ color: color }}
          >
            {currentPercentage}% <span className="text-black">{name2}</span>
          </span>
        </div>
      </div>
      <h3 className=" text-xl">{name2}</h3>
    </div>
  );
};
