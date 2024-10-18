import { Title } from '../Title';
import { Card } from './Card';

export const Projects = () => {
  return (
    <div className="mt-20">
      <Title name="Some previous projects" />

      <div className=" bg-[#3ABEF9] w-full h-48 relative mt-40">
        <div className=" px-16 grid grid-cols-4 gap-24 absolute -top-[34%]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="bg-light-primary w-full h-20 absolute rounded-t-lg top-[60%]"></div>
      </div>
    </div>
  );
};
