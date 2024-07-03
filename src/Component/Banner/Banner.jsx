import bannerImg from "../../assets/Rectangle 5.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-gradient-to-br from-[#00c19e2a] to-[#02004378] z-10 rounded-[55px] mt-4">
          <img src={bannerImg} alt="" className="w-full relative -z-10" />
        </div>
      </div>
    </>
  );
};

export default Banner;
