import { Animation } from './Animation';
import 'animate.css';
import {
  FaFacebook,
  FaSquareXTwitter,
  FaTelegram,
  FaGithub
} from 'react-icons/fa6';

import { Text } from './Text';
import banner from '../../assets/banner-animation.png';
export const Information = () => {
  return (
    <div className=" relative">
      <div className="text-center mt-12 ">
        <h2 className=" font-bold text-3xl">Tran Van Tinh</h2>
        <p className="text-2xl">Web Developer</p>
      </div>

      <div className=" grid lg:grid-cols-2 md:grid-rows-2 md:grid-cols-1 lg:grid-rows-1  lg:gap-10 md:gap-40 mt-12">
        <div className="px-12 py-10 bg-light-primary rounded-3xl">
          <h2 className="text-center text-3xl font-semibold font-mono">
            Personal Info
          </h2>
          <div className="">
            <Text title="Fullname:" name="Tran Van Tinh" />
            <Text title="Birthday:" name="09/02/2003" />
            <Text title="Mobile:" name="+84 364 653 918" />
            <Text title="Email:" name="tranvantinh0923coze@gmail.com" />
            <Text title="Location:" name="Da Nang, VN" />
            <Text title="Languages:" name="Vietnamese, English" />
            <h2 className="text-2xl font-semibold flex items-center gap-2 leading-10 ">
              Elsewhere:
              <div className=" flex items-center justify-center gap-2">
                <a href="https://www.facebook.com/cutun0902" target="blank">
                  <FaFacebook color="#0866ff" />
                </a>
                <a href="https://x.com/DenniTran" target="blank">
                  <FaSquareXTwitter />
                </a>
                <a href="https://t.me/dennistran92" target="blank">
                  <FaTelegram color="30A3E6" />
                </a>
                <a href="https://github.com/dennislove" target="blank">
                  <FaGithub />
                </a>
              </div>
            </h2>
          </div>
        </div>
        <Animation />
        <img
          src={banner}
          alt="banner-animation"
          className=" md:hidden sm:block mt-10 mx-auto px-4 animate__animated  animate__fadeInUp"
        />
      </div>
    </div>
  );
};
