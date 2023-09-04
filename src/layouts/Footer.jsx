import { text } from "../style";

const Footer = () => {
  const nowYear = new Date();
  return (
    <div className="py-6 text-center">
      <p className={text.p}>
        Copyright Ⓒ DevBook {nowYear.getFullYear()},{" "}
        <span className="font-semibold text-primary">Saeed Altout, </span>
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
