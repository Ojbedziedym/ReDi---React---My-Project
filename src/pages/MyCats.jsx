import img from "../assets/styles/kitku.jpeg";

const MyCats = () => {
  return (
    <div
      id="MyCats"
      className="min-h-screen bg-[#133B5C] lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div
        data-aos="fade-up"
        className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-[#f6abb6]"
      >
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          My beloved cats
        </h1>
        <p data-aos="fade-right" className="text-[#eec9d2]">
          I have been a cat dad to two sisters for over 3 years. Their names are
          Krysia and Marysia. They are the most beloved cats in the world. Home
          with them takes on a completely different meaning, they love to play
          and are clever when it comes to delicacies.
        </p>
        <div className="flex mt-8 gap-2"></div>
      </div>
      <img
        data-aos="fade-down"
        src={img}
        width={450}
        height={450}
        className="rounded-10 border-2 p-1 border-sky-500 img_glow"
        alt=""
      />
    </div>
  );
};

export default MyCats;
