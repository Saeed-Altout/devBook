import React from "react";
import logo from "../assets/site-logo.svg";
import styles from "../style";
const Header = () => {
  return (
    <div className={`${styles.boxContainer}`}>
      <nav className="py-6 flex flex-row items-center justify-start gap-2 mx-auto w-fit">
        <img
          src={logo}
          alt="Logo"
          className="w-[40px] h-[40px] object-contain animate-bounce"
        />
        <p className="font-bold text-3xl font-poppins">
          dev<span className="text-[#ed6524]">Book</span>
        </p>
      </nav>
    </div>
  );
};

export default Header;
