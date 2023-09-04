import { testimonials } from "../constants/index";
import { TitleSection } from "../components/index";
import { tag, text } from "../style";
const Reviews = () => (
  <section id="reviews" className={tag.section}>
    <div className={tag.container}>
      <TitleSection
        title="Book Reviews"
        description="See what our readers are saying."
      />

      <div
        className={`mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3`}
      >
        {testimonials.map((per) => (
          <div
            key={per.id}
            className=" text-center p-5 shadow-lg rounded-xl dark:bg-[#0a061d]"
          >
            <p className={text.p}>{per.comment}</p>
            <div className="mt-10 flex justify-start items-center gap-5">
              <div className="w-16 h-16">
                <img
                  src={per.img}
                  alt="Image Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className={`${text.h5} text-[#ed6524]`}>{per.name}</h4>
                <p className={`${text.p} italic text-sm`}>{per.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
