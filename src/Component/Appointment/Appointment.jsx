import appointmentImg from "../../assets/Rectangle 32.png";
import CustomButton from "../Button/CustomButton";
import logo from "../../assets/logo light.png";

const Appointment = () => {
  return (
    <div
      className="relative -z-20"
      style={{
        backgroundColor: "#e1f5ff5b",
        backgroundImage: "linear-gradient(#E5F6FF 45%, #C9DDE7 40%)",
        backgroundSize: "170px 170px",
      }}
    >
      <div className="max-w-[1200px] mx-auto my-20 relative">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle at 5% 50%,#020043, #0200434D)",
          }}
          className="z-10 rounded-[40px]"
        >
          <img
            src={appointmentImg}
            alt="advertisement"
            className="w-full relative -z-10 rounded-[40px]"
          />
        </div>
        <div className="absolute top-[20%] left-16">
          <h2 className="text-5xl font-semibold text-[#FFFFF5] leading-[4rem]">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h2>
          <div className="mt-8 flex  gap-4">
            <CustomButton
              bgColor="#FFC637"
              text="Appointment"
              textColor="#020043"
            />
            <div className="border w-fit rounded-xl">
                <CustomButton text='Learn More' textColor='#FFFFF5' />
            </div>
          </div>
        </div>
        <figure className="absolute top-12 right-16">
          <img src={logo} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Appointment;
