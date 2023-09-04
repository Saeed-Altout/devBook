import { logo } from "../assets";
import { flex } from "../style";
const Navbar = () => (
  <nav className={`${flex.center} py-10 gap-4`}>
    <img src={logo} alt="Logo" className="w-[40px] h-[40px]" />
    <p className="font-bold text-3xl dark:text-white">
      Dev<span className="text-[#ed6524]">Book</span>
    </p>
  </nav>
);

export default Navbar;
