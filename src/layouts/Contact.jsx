import { tag } from "../style";
import { TitleSection, Button } from "../components/index";
const Contact = () => (
  <section
    id="contact"
    className={`${tag.section}  bg-[#f6f8fc] dark:bg-[#03010b]`}
  >
    <div className={tag.container}>
      <TitleSection
        title="Get A Free Preview"
        description="Sign up to get a free preview of the book. You can offer visitors free
          book previews to generate leads."
      />

      <form className="max-w-md mx-auto mt-10">
        <input
          type="email"
          className="border-2 p-3 w-full border-[#ed642441] hover:border-[#ed6524] duration-300 ease-in-out outline-none  rounded-xl bg-white"
          placeholder="Enter Your Email"
        />
        <Button
          text="Send"
          styles="w-full rounded-xl bg-[#ed6524] mt-5 text-white"
        />
      </form>
    </div>
  </section>
);

export default Contact;
