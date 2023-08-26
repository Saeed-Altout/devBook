import React from "react";
import { services } from "../constants/index";
import styles from "../style";
import { AiFillBook } from "react-icons/ai";
import TitleSection from "./TitleSection";
const Services = () => {
  return (
    <section
      id="services"
      className={`${styles.boxSection} bg-gradient-to-b from-[#f6f8fc] to-[#fff]`}
    >
      <div className={styles.boxContainer}>
        <TitleSection
          title="What Will You Get From This Book?"
          description=" Section intro goes here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer blandit consequat consequat. Orci varius
            natoque penatibus et magnis."
        />

        <div className={`${styles.gridSystem} gap-5 mt-20`}>
          {services.map((service) => (
            <div key={service.id} className="text-center">
              <span className="bg-[#ed6524] h-10 w-10 flex items-center justify-center rounded-full mx-auto mb-5">
                <AiFillBook className="text-white text-lg" />
              </span>
              <h4 className={`${styles.heading4}`}>{service.title}</h4>
              <p className={`${styles.paragraph}`}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
