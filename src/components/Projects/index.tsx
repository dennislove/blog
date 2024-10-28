import { Title } from '../Title';
import { Card } from './Card';
import logo1 from '../../assets/logo-card-1.jpg';
import banner1 from '../../assets/bg-card-1.png';
import logo2 from '../../assets/logo-card-2.png';
import banner2 from '../../assets/bg-card-2.png';
import logo3 from '../../assets/logo-card-3.png';
import banner3 from '../../assets/bg-card-3.png';
import logo4 from '../../assets/logo-card-4.png';
import banner4 from '../../assets/bg-card-4.png';
export const Projects = () => {
  const listPrj = [
    {
      link: 'https://dongsonevent-dns.web.app/',
      name: 'DNS',
      imgBanner: banner1,
      imgLogo: logo1
    },
    {
      link: 'https://tuetam-tuetam.firebaseapp.com/',
      name: 'tuetam',
      imgBanner: banner2,
      imgLogo: logo2
    },
    {
      link: '#',
      name: 'OHF',
      imgBanner: banner3,
      imgLogo: logo3
    },
    {
      link: '#',
      name: 'DNS',
      imgBanner: banner4,
      imgLogo: logo4
    }
  ];
  return (
    <div className="md:mt-48 sm:mt-20 xl:mt-60 px-4">
      <Title name="Some previous projects" />

      <div className=" md:bg-[#3ABEF9] sm:bg-transparent w-full h-56 md:h-48 xl:h-72 sm:h-full relative md:mt-60 xl:mt-96 sm:mt-10 shadow-2xl">
        <div className=" lg:px-16 px-8 grid md:grid-cols-4 sm:grid-cols-1 lg:gap-24 md:gap-0 sm:gap-10 md:absolute sm:relative md:-top-[30%] xl:-top-full lg:-top-[65%] sm:top-0">
          {listPrj.map((item, index) => (
            <Card
              id={index}
              name={item.name}
              link={item.link}
              imgBanner={item.imgBanner}
              imgLogo={item.imgLogo}
            />
          ))}
        </div>
        <div className="bg-light-primary w-full h-28 absolute rounded-t-lg top-[66%] xl:top-[62%] md:top-1/2 md:block sm:hidden "></div>
      </div>
    </div>
  );
};
