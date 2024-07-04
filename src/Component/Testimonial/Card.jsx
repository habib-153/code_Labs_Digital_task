/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";

const Card = ({title, text, img, name, designation}) => {
    return (
            <div className="bg-[#FFFFF5] p-7 rounded-2xl max-w-[370px]">
            <h3 className="text-xl font-semibold">
              {title}
            </h3>
            <p className="text-[12px] mt-3">
                {text}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src={img} alt="Reviewer" />
              <div>
                <p className="text-sm font-semibold">
                  {name}, <span className="font-normal">{designation}</span>
                </p>
                <div className="flex text-[#FFE03D] gap-2 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>

    );
};

export default Card;