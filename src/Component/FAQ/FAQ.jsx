/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./custom.css";

const FAQItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => setIsActive(!isActive);

  return (
    <div>
      <div
        className={`faq-item ${isActive ? "active" : ""} bg-[#FFFFF5] px-16 flex items-center justify-between rounded-xl`}
        onClick={toggleIsActive}
      >
        <h3 className="text-xl font-semibold py-5">{question}</h3>
        {isActive ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isActive && (
        <p className="text-sm pl-16 pr-28 py-4 text-[#000000d1]">{answer}</p>
      )}
    </div>
  );
};

const FAQuestions = () => {
  const faqData = [
    {
      question: "What are your office hours?",
      answer:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      question: "How can I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our office during business hours or by using our online appointment booking tool available on our website.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance plans. Please contact our office or check our website for a list of accepted insurance providers.",
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "Please bring a valid ID, your insurance card, and any relevant medical records or test results to your appointment.",
    },
    {
      question: "Do you offer taleMedicine appointments?",
      answer:
        "Yes, we offer taleMedicine appointments for certain types of visits. Please contact our office to see if your appointment can be conducted virtually.",
    },
  ];

  return (
    <div className="my-20">
      <p className="border border-[#4D4C7B] bg-[#FBFBFB] py-2 px-4 rounded-full text-[#020043] inline">
        FAQ
      </p>
      <p className="text-3xl text-[#020043] font-bold leading-10 my-6">
        Frequently Asked Questions
      </p>

      <div className="flex flex-col gap-3">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQuestions;