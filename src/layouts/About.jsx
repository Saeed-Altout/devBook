import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import { TitleSection } from "../components/index";
import { flex, tag, text } from "../style";
import { profileAuthor } from "../assets";
const iconContact = [
  {
    id: 0,
    icon: <FaFacebook />,
    href: "",
  },
  {
    id: 1,
    icon: <FaInstagram />,
    href: "",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    href: "",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    href: "",
  },
];
const About = () => (
  <section
    id="about"
    className={`${tag.section} bg-[#ed6524] dark:bg-[#03010b]`}
  >
    <div className={`${tag.container} `}>
      <TitleSection title="About The Author" styles=" text-white" />

      <div className="w-32 h-32 mx-auto mt-10 mb-5">
        <img
          src={profileAuthor}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      <p className={`${text.p} max-w-4xl mx-auto`}>
        <span className="text-white block mt-2">
          This book landing page template is made by product designer Xiaoying
          Riley for developers. You can use this template to self-publish and
          promote your book/ebook. You can easily use platforms such as Gumroad
          to handle your book payment and delivery.
        </span>
        <span className="text-white block mt-2">
          This template is 100% FREE as long as you keep the footer attribution
          link. You do not have the rights to resell, sublicense or redistribute
          (even for free) the template on its own or as a separate attachment
          from any of your work. If you’d like to use this template without the
          footer attribution link, you can buy the commercial license.
        </span>
      </p>

      <div className="flex flex-col items-center justify-center gap-5">
        <h4 className={`${text.h5} text-white mt-20`}>Follow Author</h4>
        <div className={`${flex.center} gap-5`}>
          {iconContact.map((icon) => (
            <span key={icon.id} className="text-white text-2xl">
              {icon.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
