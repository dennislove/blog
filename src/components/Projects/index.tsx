import { Title } from '../Title';
import { Card } from './Card';
import logo1 from '../../assets/logo-card-1.jpg';
import banner1 from '../../assets/bg-card-1.png';
import logo2 from '../../assets/logo-card-2.png';
import banner2 from '../../assets/bg-card-2.png';
import logo3 from '../../assets/logo-card-3.png';
// import banner3 from '../../assets/bg-card-3.png';
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
      link: 'https://dongsonevent-dns.web.app/',
      name: 'OHF',
      imgBanner: banner1,
      imgLogo: logo3
    },
    {
      link: 'https://dongsonevent-dns.web.app/',
      name: 'DNS',
      imgBanner: banner1,
      imgLogo: logo1
    }
  ];
  return (
    <div className="mt-20">
      <Title name="Some previous projects" />

      <div className=" bg-[#3ABEF9] w-full h-48 relative mt-40 shadow-2xl">
        <div className=" px-16 grid grid-cols-4 gap-24 absolute -top-[34%]">
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
        <div className="bg-light-primary w-full h-20 absolute rounded-t-lg top-[60%] "></div>
      </div>
    </div>
  );
};
