import Card from "./Card";
import img1 from '../../assets/Ellipse 10.png'
import img2 from '../../assets/Ellipse 2.png'
import img3 from '../../assets/Ellipse 5.png'
import PaginationButtons from "./PaginationButtons";

const Testimonial = () => {
  return (
    <div className="my-20">
      <p className="border border-[#4D4C7B] bg-[#FBFBFB] py-2 px-4 rounded-full text-[#020043] inline">
        Testimonial
      </p>
      <p className="text-3xl text-[#020043] font-bold leading-10 my-6">
        What they say about us
      </p>
      <div className="grid grid-cols-3 gap-5">
        <Card img={img1} title='Expertise and Compassion Combined' name='Sarah D' designation='IT Professional' text="I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way."/>
        <Card img={img2} title='Life-Saving Care, Life-Changing Experience' name='Michael R' designation='Business Executive' text="My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life."/>
        <Card img={img3} title='A Partner in Health and Wellness' name='David S' designation='Lawyer' text="As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and."/>
      </div>
      <div>
        <PaginationButtons />
      </div>
    </div>
  );
};

export default Testimonial;
