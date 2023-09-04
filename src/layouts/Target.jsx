import { flex, tag, text } from "../style";
import { listTarget } from "../constants/index";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TitleSection } from "../components/index";
const Target = () => (
  <section id="target" className={tag.section}>
    <div className={tag.container}>
      <TitleSection
        title="Who This Book Is For"
        description="List your target readers in this section and back up with reviews.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales
          sit amet neque sit amet molestie. Vivamus hendrerit nisi condimentum
          erat tempus, vitae accumsan odio euismod."
      />

      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listTarget.map((item) => (
          <div
            key={item.id}
            className={`${flex.start} gap-2 border-2 p-5 border-[#ed642441] hover:border-[#ed6524] duration-300 ease-in-out rounded-xl`}
          >
            <span>
              <AiOutlineUserSwitch className="text-3xl text-[#ed6524]" />
            </span>
            <span>
              <h5 className={text.h5}>{item.title}</h5>
              <p className={text.p}>{item.description}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Target;
