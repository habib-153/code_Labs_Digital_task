import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";

const ComprehensiveCare = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-5 my-8">
        <Card1 />
        <div className="col-span-3">
          <h1 className="text-center text-5xl font-semibold text-[#020043] mb-5">
            Comprehensive Care <br /> for Every Patient
          </h1>
          <div className="grid grid-cols-3 gap-5 items-end place-content-end">
            <Card2 />
            <Card3 />
            <Card4 />            
          </div>
        </div>
        <Card5 />
      </div>
    </>
  );
};

export default ComprehensiveCare;
