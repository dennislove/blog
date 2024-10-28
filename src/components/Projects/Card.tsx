type CardItem = {
  link: string;
  imgLogo: string;
  imgBanner: string;
  name: string;
  id: number;
};
export const Card: React.FC<CardItem> = ({
  link,
  imgLogo,
  imgBanner,
  name,
  id
}) => {
  return (
    <a
      key={id}
      href={link}
      target="blank"
      className=" bg-black md:hover:-translate-y-20 sm:hover:translate-y-0 rounded-tr-lg rounded-bl-lg transform duration-300 relative cursor-pointer lg:ml-0 md:-ml-6"
    >
      <img
        src={imgBanner}
        alt={name}
        className=" opacity-80 rounded-tr-lg rounded-bl-lg"
      />
      <div className=" absolute h-[140px] w-[240px] -rotate-45 border-l-[120px] -top-[35px] -left-[85px] border-l-transparent border-r-[120px] border-r-transparent border-b-[120px] border-b-[#DC5454] "></div>
      <h2 className=" text-white absolute -rotate-45 font-semibold text-xl left-8 top-16">
        Website
      </h2>
      <img
        src={imgLogo}
        alt={name}
        className=" absolute rounded-full w-16 h-16 top-2 left-2"
      />
    </a>
  );
};
