import React from "react";
import { testimonials } from "../constants/index";
import TitleSection from "./TitleSection";
import styles from "../style";
const Reviews = () => {
  return (
    <section id="reviews" className={`${styles.boxSection}`}>
      <div className={`${styles.boxContainer}`}>
        <TitleSection
          title="Book Reviews"
          description="See what our readers are saying."
        />

        <div className={`${styles.gridSystem} gap-5 mt-20`}>
          {testimonials.map((per) => (
            <div key={per.id} className="bg-[#f6f8fc] p-6 text-center">
              <p className={`${styles.paragraph} mb-5`}>{per.comment}</p>
              <img
                src={per.img}
                alt="Image Profile"
                className="w-14 h-14 rounded-full object-cover mx-auto"
              />
              <h4 className={`${styles.heading4} text-[#ed6524] mt-2`}>
                {per.name}
              </h4>
              <p className={`${styles.paragraph} italic text-sm`}>
                {per.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
