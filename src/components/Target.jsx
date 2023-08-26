import React from "react";
import styles from "../style";
import { listTarget } from "../constants/index";
import { AiOutlineUserSwitch } from "react-icons/ai";
import TitleSection from "./TitleSection";
const Target = () => {
  return (
    <section id="target" className={`${styles.boxSection}`}>
      <div className={`${styles.boxContainer}`}>
        <TitleSection
          title="Who This Book Is For"
          description="List your target readers in this section and back up with reviews.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales
          sit amet neque sit amet molestie. Vivamus hendrerit nisi condimentum
          erat tempus, vitae accumsan odio euismod."
        />

        <ul className={`${styles.flexCenter} flex-col gap-5 mt-10`}>
          {listTarget.map((item) => (
            <li key={item.id} className={`${styles.flexStart} gap-3`}>
              <span>
                <AiOutlineUserSwitch className="text-3xl text-[#ed6524]" />
              </span>
              <span>
                <h4 className={`${styles.heading4}`}>{item.title}</h4>
                <p className={`${styles.paragraph}`}>{item.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Target;
