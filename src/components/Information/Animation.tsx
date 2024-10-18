import 'animate.css';
import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';
import item5 from '../../assets/item5.png';
import item6 from '../../assets/item6.png';
import item7 from '../../assets/item7.png';
import item8 from '../../assets/item8.png';
import item9 from '../../assets/item9.png';
import item10 from '../../assets/item10.png';
import item12 from '../../assets/item12.png';
import item13 from '../../assets/item13.png';
import shadow from '../../assets/shadow.png';

export const Animation = () => {
  return (
    <div className=" relative">
      <img
        src={item1}
        alt="language"
        className="animate__animated absolute left-[31%] -top-2 z-[12] animate__fadeInDownBig"
      />
      <img
        src={item2}
        alt="roof"
        className="animate__animated absolute left-1/3 top-1/2 z-20 animate__fadeInUpBig"
      />
      <img
        src={item3}
        alt="man"
        className="animate__animated absolute left-[53%] top-[30%] z-[22] animate__fadeInBottomRight"
      />
      <img
        src={item5}
        alt="table"
        className="animate__animated absolute left-[40%] top-1/3 z-[21] animate__fadeInRight"
      />
      <img
        src={item6}
        alt="keyboard"
        className="animate__animated absolute left-1/2 top-[46%] z-[21] animate__fadeInUp"
      />
      <img
        src={item7}
        alt="screen"
        className="animate__animated absolute left-[47%] top-[18%] z-[33] animate__bounceInDown"
      />
      <img
        src={item8}
        alt="cup"
        className="animate__animated absolute left-[45%] top-[54%] z-[25] animate__rollIn"
      />
      <img
        src={item9}
        alt="phone"
        className="animate__animated absolute left-[47%] top-[61%] z-[25] animate__rollIn"
      />
      <img
        src={item10}
        alt="pen"
        className="animate__animated absolute left-[55%] top-[46%] z-[25] animate__fadeInUp"
      />

      <img
        src={item12}
        alt="book"
        className="animate__animated absolute left-[60%] top-[38%] z-[25] animate__slideInRight"
      />
      <img
        src={item13}
        alt="cat"
        className="animate__animated absolute left-[40%] top-3/4 z-[25] animate__fadeInBottomLeft"
      />
      <img
        src={shadow}
        alt="shadow"
        className="animate__animated absolute left-[34%] -top-[12px] z-10 animate__fadeIn"
      />
    </div>
  );
};
