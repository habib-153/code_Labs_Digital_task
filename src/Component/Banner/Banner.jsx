import bannerImg from "../../assets/Rectangle 5.png";

const Banner = () => {
  return (
    <div
      className="relative -z-20"
      style={{
        backgroundColor: "#e1f5ff5b",
        backgroundImage: "linear-gradient(#E5F6FF 45%, #C9DDE7 40%)",
        backgroundSize: "150px 160px",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-gradient-to-br from-[#00c19e2a] to-[#02004378] z-10 rounded-[55px] mt-4">
          <img src={bannerImg} alt="" className="w-full relative -z-10" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
