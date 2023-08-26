import React from "react";
import Button from "./Button";
import styles from "../style";
import book from "../assets/devbook-cover.png";
const Hero = () => {
  return (
    <section id="home" className={`${styles.boxSection} min-h-screen`}>
      <div className={`${styles.boxContainer}`}>
        <div className={`${styles.flexBetween} flex-col md:flex-row gap-5`}>
          <div className="basis-1 md:basis-2/3">
            <h1 className={`${styles.titleWebsite}`}>
              Free Book & eBook Landing Page Template
            </h1>
            <p className={`${styles.paragraph} max-w-[660px] py-5`}>
              A free Bootstrap 5 template for developers and programmers who
              want to self-publish books. Download now and start selling your
              book right away!
            </p>
            <div className={`${styles.flexStart} flex-col md:flex-row gap-5`}>
              <Button
                text="Buy for $29"
                styles="bg-[#ed6524] text-white  w-full"
              />
              <Button
                text="Learn More"
                styles="border-[#ed6524] border-2 w-full "
              />
            </div>
          </div>
          <div className="basis-1 md:basis-1/3">
            <img
              src={book}
              alt="cover book"
              className="w-[300px] md:w-[400px] h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
