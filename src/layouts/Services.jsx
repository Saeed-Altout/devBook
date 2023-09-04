import { services } from "../constants/index";
import { flex, tag, text } from "../style";
import { AiFillBook } from "react-icons/ai";
import { TitleSection } from "../components/index";
const Services = () => (
  <section
    id="services"
    className={`${tag.section}  bg-[#f6f8fc] dark:bg-[#03010b] `}
  >
    <div className={tag.container}>
      <TitleSection
        title="What Will You Get From This Book?"
        description="Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer blandit consequat consequat. Orci varius
            natoque penatibus et magnis."
      />

      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className={`${flex.center} flex-col text-center bg-white dark:bg-[#0a061d] p-8 rounded-xl shadow-lg hover:scale-105  hover:shadow-xl duration-300 ease-in-out gap-5`}
          >
            <span className="bg-[#ed6524] mx-auto rounded-full p-3 w-fit block">
              <AiFillBook className="text-white text-lg" />
            </span>
            <h4 className={`text-center ${text.h4}`}>{service.title}</h4>
            <p className={text.p}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
