import { text } from "../style";
const TitleSection = ({ title, description, styles }) => (
  <div className={`max-w-3xl mx-auto ${styles}`}>
    <h2 className={text.headSection}>{title}</h2>
    <p className={text.subHeadSection}>{description}</p>
  </div>
);

export default TitleSection;
