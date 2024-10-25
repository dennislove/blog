import { useEffect, useState, useRef } from 'react';
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
  const [currentPercentage, setCurrentPercentage] = useState(50);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => observer.disconnect();
  }, []);
  let endPoint: number = 100 - percentage;

  useEffect(() => {
    if (isVisible) {
      let start: number = 50;
      const interval = setInterval(() => {
        if (endPoint > start && currentPercentage < endPoint) {
          setCurrentPercentage((prev) => prev + 1); // Move right
        } else if (endPoint < start && currentPercentage > endPoint) {
          setCurrentPercentage((prev) => prev - 1); // Move left
        } else {
          clearInterval(interval); // Stop once target is reached
        }
      }, 20); // Adjust speed of percentage increase

      return () => clearInterval(interval);
    }
  }, [isVisible, percentage, currentPercentage]);
  return (
    <div
      ref={progressBarRef}
      className=" grid grid-cols-6 gap-4 items-center justify-center py-4 pt-8 "
    >
      <h3 className=" text-xl text-right">{name1}</h3>
      <div className="col-start-2 col-span-4  relative w-full bg-gray-200 rounded-full  flex items-center">
        {/* The background progress bar */}
        <div
          className="absolute bg-blue-500 h-4 rounded-full transition-all duration-1000"
          style={{ width: `100%`, backgroundColor: `${color}` }}
        ></div>

        {/* The sliding circle */}
        <div
          className="absolute w-6 h-6  border-[4px] border-white rounded-full flex justify-center items-center transition-all duration-1000 animate__animated animate__heartBeat"
          style={{ left: `calc(${currentPercentage}% - 12px)` }}
        >
          <span
            className={` text-base font-bold absolute -top-8 flex gap-1 `}
            style={{ color: color }}
          >
            {percentage}% <span className="text-black">{name1}</span>
          </span>
        </div>
      </div>
      <h3 className=" text-xl">{name2}</h3>
    </div>
  );
};
