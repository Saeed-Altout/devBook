import React from "react";
import styles from "../style";

const Footer = () => {
  const nowYear = new Date();
  return (
    <div className="py-6">
      <p className="text-base leading-8 tracking-wide text-center">
        Copyright Ⓒ devBook {nowYear.getFullYear()},{" "}
        <span className="font-semibold text-primary">Saeed Altout, </span>
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
