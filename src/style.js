const styles = {
  titleWebsite: "font-bold text-3xl md:text-4xl lg:text-5xl font-poppins",
  paragraph:
    "font-poppins font-normal text-gray-600 text-base leading-[30.8px]",
  boxContainer: "container mx-auto overflow-hidden px-6 md:px-16 lg:px-32",
  boxSection: "py-20",

  gridSystem: " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
  heading2: " text-3xl font-poppins text-center font-semibold",
  heading4: "text-lg font-medium font-poppins",

  flexCenter: "flex justify-center items-center",
  flexBetween: "flex justify-between items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
