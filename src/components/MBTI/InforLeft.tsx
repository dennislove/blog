import man from '../../assets/man.png';

export const InforLeft = () => {
  return (
    <div className="p-6 flex flex-col gap-y-4 bg-[#EDF6F1] rounded-lg relative">
      <h2 className=" text-center font-bold text-2xl">Protagonist(ENFJ-A)</h2>
      <img src={man} alt="man" className=" w-40 mx-auto " />
      <p className=" text-[18px]">
        Protagonists are inspiring optimists, readily taking action to do what
        they feel is right. These warm, forthright types love helping others and
        have the creative energy to achieve their goals.
      </p>
    </div>
  );
};
