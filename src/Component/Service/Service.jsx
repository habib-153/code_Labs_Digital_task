import img1 from "../../assets/Rectangle 27-2.png";
import img2 from "../../assets/Rectangle 27-1.png";
import img3 from "../../assets/Rectangle 27.png";
import CustomButton from "../Button/CustomButton";
import { MdOutlineArrowOutward } from "react-icons/md";

const Service = () => {
  return (
    <div className="mt-32 mb-20">
      <div className="grid grid-rows-2 gap-5 p-10 rounded-[32px] bg-[#ffffe9]">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="border border-[#4D4C7B] bg-[#FBFBFB] py-2 px-4 rounded-full text-[#020043] inline">
              Service
            </p>
            <p className="text-3xl text-[#020043] font-bold leading-10 my-6">
              Empowering Health, <br /> Enriching Lives
            </p>
            <p className="text-[#4D4C7B] max-w-sm">
              We are committed to providing high-quality, compassionate care to
              every patient we serve. Whatever your healthcare needs may be, you
              can trust us to be your partner in health and wellness.
            </p>
            <div className="mt-8">
              <CustomButton
                bgColor="#FFC637"
                text="Appointment"
                textColor="#020043"
              />
            </div>
          </div>
          {/* Service-1 */}
          <div className="relative">
            <img src={img1} alt="Service1" className="w-full rounded-[30px]" />
            <div className="w-[70%] bg-[#02004399] rounded-[20px] text-[#F1FAFF] p-7 absolute bottom-5 left-5">
              <h3 className="text-[20px] font-semibold mb-3">
                Advanced Technology
              </h3>
              <p className="max-w-[280px] text-[12px]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <button>
                <MdOutlineArrowOutward className="bg-yellow-400 w-12 h-12 p-2 rounded-full text-white absolute bottom-5 right-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {/* Service-2 */}
          <div className="relative">
            <img src={img2} alt="Service2" className="w-full rounded-[30px]" />
            <div className="w-[70%] bg-[#02004399] rounded-[20px] text-[#F1FAFF] p-7 absolute bottom-5 left-5">
              <h3 className="text-[20px] font-semibold mb-3">
                Online Doctor Meet
              </h3>
              <p className="max-w-[280px] text-[12px]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <button>
                <MdOutlineArrowOutward className="bg-yellow-400 w-12 h-12 p-2 rounded-full text-white absolute bottom-5 right-5" />
              </button>
            </div>
          </div>
          {/* Service-3 */}
          <div className="relative">
            <img src={img3} alt="Service3" className="w-full rounded-[30px]" />
            <div className="w-[70%] bg-[#02004399] rounded-[20px] text-[#F1FAFF] p-7 absolute bottom-5 left-5">
              <h3 className="text-[20px] font-semibold mb-3">
                Consultancy your health
              </h3>
              <p className="max-w-[280px] text-[12px]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <button>
                <MdOutlineArrowOutward className="bg-yellow-400 w-12 h-12 p-2 rounded-full text-white absolute bottom-5 right-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
