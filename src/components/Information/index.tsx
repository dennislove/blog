import { Animation } from './Animation';
import { Text } from './Text';
import { FaFacebook, FaSquareXTwitter, FaTelegram } from 'react-icons/fa6';
export const Information = () => {
  return (
    <div>
      <div className="text-center mt-12 ">
        <h2 className=" font-bold text-3xl">Trần Văn Tĩnh</h2>
        <p className="text-2xl">Web Developer ReactJS</p>
      </div>

      <div className=" grid grid-cols-2 gap-20 mt-12">
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
            <h2 className="text-2xl font-semibold flex items-center gap-2 ">
              Elsewhere:
              <div className=" flex items-center justify-center gap-2">
                <FaFacebook color="#0866ff" />
                <FaSquareXTwitter />
                <FaTelegram color="30A3E6" />
              </div>
            </h2>
          </div>
        </div>

        <Animation />
      </div>
    </div>
  );
};
