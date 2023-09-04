import React from "react";
import { tag } from "../style";

const Button = ({ text, styles }) => {
  return (
    <button
      type="button"
      className={`${tag.button} ${styles} whitespace-nowrap`}
    >
      {text}
    </button>
  );
};

export default Button;
