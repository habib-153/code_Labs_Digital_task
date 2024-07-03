import logo from "../assets/logo dark.png";
import CustomButton from "./Button/CustomButton";

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
          <div>
            <CustomButton text='Appointment' textColor='#020043' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
