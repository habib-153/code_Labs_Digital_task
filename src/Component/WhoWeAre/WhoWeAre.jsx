import img from "../../assets/Rectangle 24.png";
import CustomButton from "../Button/CustomButton";

const WhoWeAre = () => {
  return (
    <div className="mt-32 mb-20">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <p className="border border-[#4D4C7B] bg-[#FBFBFB] py-2 px-4 rounded-full text-[#020043] inline">
            Who We Are
          </p>
          <p className="text-3xl text-[#020043] font-bold leading-10 my-6">
            We Help To Get <br /> Solutions
          </p>
          <p className="text-[#4D4C7B] max-w-[440px]">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>
          <div className="mt-8">
            <CustomButton
              bgColor="#FFC637"
              text="Learn More"
              textColor="#020043"
            />
          </div>
        </div>
        {/* Image */}
        <div className="relative">
          <img src={img} alt="We Are One" className="w-full" />
          <div className="max-w-[350px] bg-[#343268] rounded-3xl text-[#F1FAFF] p-7 absolute -bottom-10 -left-20">
            <h3 className="text-[26px] font-semibold mb-4">
              Our mission is simple
            </h3>
            <p>
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
