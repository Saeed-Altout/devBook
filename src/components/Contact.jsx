import React from "react";
import Button from "./Button";
import styles from "../style";
import TitleSection from "./TitleSection";
const Contact = () => {
  return (
    <section id="contact" className={`${styles.boxSection}`}>
      <div className={`${styles.boxContainer}`}>
        <TitleSection
          title="Get A Free Preview"
          description="Sign up to get a free preview of the book. You can offer visitors free
          book previews to generate leads."
        />

        <form className="max-w-[400px] mx-auto">
          <input
            type="email"
            className="border-2 block placeholder:font-poppins rounded-md w-full outline-none border-gray-300 px-3 py-2"
            placeholder="Enter Your Email"
          />
          <Button
            text="Send"
            styles="w-full rounded-md bg-[#ed6524] mt-5 text-white text-lg"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
