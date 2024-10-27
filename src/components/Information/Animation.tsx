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
import './style.css';

export const Animation = () => {
  return (
    <div className=" relative mt-10 banner-image">
      <img
        src={item1}
        alt="language"
        //
        className="animate__animated animate__fadeInDownBig "
      />
      <img
        src={item2}
        alt="roof"
        className="animate__animated animate__fadeInUpBig"
      />
      <img
        src={item3}
        alt="man"
        className="animate__animated  animate__fadeInDownBig"
      />
      <img
        src={item5}
        alt="table"
        className="animate__animated  animate__fadeInLeft"
      />
      <img
        src={item6}
        alt="keyboard"
        className="animate__animated animate__fadeInUp"
      />
      <img
        src={item7}
        alt="screen"
        className="animate__animated  animate__bounceInDown"
      />
      <img
        src={item8}
        alt="cup"
        className="animate__animated  animate__rollIn"
      />
      <img
        src={item9}
        alt="phone"
        className="animate__animated  animate__rollIn"
      />
      <img
        src={item10}
        alt="pen"
        className="animate__animated  animate__fadeInUp"
      />

      <img
        src={item12}
        alt="book"
        className="animate__animated  animate__slideInRight"
      />
      <img
        src={item13}
        alt="cat"
        className="animate__animated  animate__fadeInBottomLeft"
      />
      <img
        src={shadow}
        alt="shadow"
        className="animate__animated  animate__fadeIn"
      />
    </div>
  );
};
