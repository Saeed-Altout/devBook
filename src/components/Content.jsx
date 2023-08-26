import React from "react";
import { listContent } from "../constants/index";
import { AiFillCheckCircle } from "react-icons/ai";
import device from "../assets/devbook-devices.png";
import Button from "./Button";
import styles from "../style";
import TitleSection from "./TitleSection";
const Content = () => {
  return (
    <section id="content" className={`${styles.boxSection}`}>
      <div className={`${styles.boxContainer}`}>
        <TitleSection title="What's Included" />
        <div className={`${styles.flexCenter} flex-col sm:flex-row gap-20`}>
          <div>
            <img
              src={device}
              alt="device"
              className="w-[300px] md:w-[400px] h-auto object-contain mx-auto"
            />
          </div>
          <ul className={`${styles.flexStart} flex-col gap-4`}>
            {listContent.map((item, index) => (
              <li key={index} className={`${styles.flexStart} gap-2`}>
                <span>
                  <AiFillCheckCircle className="text-3xl text-[#ed6524]" />
                </span>
                <p className={`${styles.paragraph}`}>{...item}</p>
              </li>
            ))}
            <Button
              text="I want this book"
              styles="bg-[#ed6524] mt-5 text-white w-full"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
