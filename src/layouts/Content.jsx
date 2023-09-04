import { listContent } from "../constants/index";
import { AiFillCheckCircle } from "react-icons/ai";
import { TitleSection, Button } from "../components/index";
import { flex, tag, text } from "../style";
import { device } from "../assets";
const Content = () => (
  <section id="content" className={tag.section}>
    <TitleSection title="What's Included" />
    <div
      className={`mt-20 ${tag.container} ${flex.center} flex-col sm:flex-row gap-20`}
    >
      <div className="max-w-sm mx-auto">
        <img
          src={device}
          alt="Device"
          className="w-full h-full object-contain"
        />
      </div>

      <ul className={`${flex.start} flex-col gap-5 w-fit mx-auto`}>
        {listContent.map((item, index) => (
          <li key={index} className={`${flex.center} gap-2 whitespace-nowrap`}>
            <AiFillCheckCircle className="text-2xl text-[#ed6524]" />
            <p className={text.p}>{...item}</p>
          </li>
        ))}
        <Button
          text="I want this book"
          styles="bg-[#ed6524] mt-5 text-white w-full"
        />
      </ul>
    </div>
  </section>
);

export default Content;
