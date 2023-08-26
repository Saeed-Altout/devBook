import React from "react";
import styles from "../style";
const TitleSection = ({ title, description }) => {
  return (
    <div>
      <h2 className={`${styles.heading2}`}>{title}</h2>
      <p
        className={`${styles.paragraph} text-center py-5 max-w-[600px] mx-auto`}
      >
        {description}
      </p>
    </div>
  );
};

export default TitleSection;
