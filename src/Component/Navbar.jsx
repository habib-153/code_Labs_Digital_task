import { MdOutlineArrowOutward } from "react-icons/md";
import logo from "../assets/logo dark.png";

const Navbar = () => {
  const navLinks = ["Home", "Services", "Blog", "About us"];

  return (
    <div className="bg-[#f1faff98]">
      <div className="p-4 max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between">
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          {/* NavLinks */}
          <ul className="text-black flex gap-7">
            {navLinks.map((navLink) => (
              <li key={navLink} className="text-[#020043] inter">
                {navLink}
              </li>
            ))}
          </ul>
          <div className="border border-[#343268] py-2 px-4 flex  gap-1 rounded-xl">
            <button className="font-medium text-[#020043]">Appointment</button>
            <MdOutlineArrowOutward className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
