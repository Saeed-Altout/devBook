import React from "react";
import profile from "../assets/author-profile.png";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import TitleSection from "./TitleSection";
import styles from "../style";
const About = () => {
  return (
    <section
      id="about"
      className={`${styles.boxSection} bg-[#ed6524] text-white`}
    >
      <div className={`${styles.boxContainer} ${styles.flexCenter} flex-col`}>
        <TitleSection title="About The Author" />

        <img
          src={profile}
          alt="profile"
          className="w-32 h-32 rounded-full object-contain mx-auto mb-10"
        />

        <p className={`${styles.paragraph} mb-5 text-white`}>
          This book landing page template is made by product designer Xiaoying
          Riley for developers. You can use this template to self-publish and
          promote your book/ebook. You can easily use platforms such as Gumroad
          to handle your book payment and delivery.
        </p>
        <p className={`${styles.paragraph} text-white`}>
          This template is 100% FREE as long as you keep the footer attribution
          link. You do not have the rights to resell, sublicense or redistribute
          (even for free) the template on its own or as a separate attachment
          from any of your work. If you’d like to use this template without the
          footer attribution link, you can buy the commercial license.
        </p>

        <div className="flex flex-col items-center justify-center">
          <h4 className={`${styles.heading4} mt-10`}>Follow Author</h4>
          <div className={`${styles.flexCenter} mt-5`}>
            <span className="text-white text-2xl mx-2 cursor-pointer">
              <AiFillFacebook />
            </span>
            <span className="text-white text-2xl mx-2 cursor-pointer">
              <AiFillGithub />
            </span>
            <span className="text-white text-2xl mx-2 cursor-pointer">
              <AiFillInstagram />
            </span>
            <span className="text-white text-2xl mx-2 cursor-pointer">
              <AiFillTwitterCircle />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
