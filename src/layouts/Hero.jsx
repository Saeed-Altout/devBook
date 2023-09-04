import { coverBook } from "../assets";
import { tag, text, flex } from "../style";
import { Button } from "../components/index";
const Hero = () => (
  <section className={tag.section}>
    <div className={tag.container}>
      <div className={`${flex.between} gap-20 flex-col sm:flex-row`}>
        <div className="max-w-5xl flex flex-col gap-5">
          <h1 className={text.titleHero}>Free Book & eBook Landing Page</h1>
          <p className={text.subTitleHero}>
            A free template for developers and programmers who want to
            self-publish books. Download now and start selling your book right
            away!
          </p>
          <div
            className={`${flex.center} gap-5 sm:ml-0 sm:mr-auto flex-col sm:flex-row`}
          >
            <Button text="Buy for $29" styles="bg-[#ed6524] text-white" />
            <Button
              text="Learn More"
              styles="border-[#ed6524] border-2 dark:text-white"
            />
          </div>
        </div>

        <div className="max-w-[400px] max-h-[600px] mx-auto">
          <img
            src={coverBook}
            alt="Cover Book"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
