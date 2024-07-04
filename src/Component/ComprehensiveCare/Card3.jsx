import { FaStar } from "react-icons/fa6";
import img1 from '../../assets/Ellipse 2.png'
import img2 from '../../assets/Ellipse 3 (1).png'
import img3 from '../../assets/Ellipse 4.png'
import img4 from '../../assets/Ellipse 5.png'

const Card3 = () => {
  return (
    <div className="shadow-xl rounded-3xl p-5 bg-[#FBFBFB] mt-10">
      <h3 className="text-4xl font-semibold">
        4.8 <FaStar className="text-[#FFE03D] inline pb-2" />
      </h3>
      <p className="my-3">Over 20,000 Patient</p>
      <div className="flex items-center">
        <img src={img1} alt="img" /> *
        <img src={img2} alt="img" className="-ml-5" /> 
        <img src={img3} alt="img" className="-ml-5" />
        <img src={img4} alt="img" className="-ml-5" />
      </div>
    </div>
  );
};

export default Card3;
