/* eslint-disable react/prop-types */
import img from '../../assets/icon/Vector.png'
import { Button } from "@material-tailwind/react";

const CustomButton = ({text}) => {
    return (
        <Button className="bg-[#8053FA] font-normal flex items-center gap-2 px-3">
            <img src={img} alt="" />{text}
        </Button>
    );
};

export default CustomButton;