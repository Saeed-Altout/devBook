import React from "react";

const Button = ({ text, styles }) => {
  return (
    <button
      type="button"
      className={`${styles} text-base font-poppins font-semibold py-[0.875rem] px-[2.5rem] rounded-[2rem]`}
    >
      {text}
    </button>
  );
};

export default Button;
