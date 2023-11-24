import img from "../assets/styles/about.png";
import { Route, Link, Routes } from "react-router-dom";

const About = () => {
  return (
    <div
      id="About"
      className="bg-[] min-h-screen lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={400}
        height={400}
        className="rounded-full border-2 p-1 border-sky-500 img_glow"
        alt=""
      />
      <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-[#81c784]">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-[#b9f6ca] uppercase"
        >
          About me
        </h1>
        <p data-aos="fade-left">
          I am a cheerful guy who is satisfied with his life. I love tarantulas,
          I have little space to keep them, so I only have 10 of them, and I
          would like to have them all, there are over a thousand species. I love
          music, books, movies and going to the gym. For me, programming is an
          interesting activity that gives me a lot of fun and satisfaction.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button
                data-aos="fade-right"
                className="resume-button shadow-xl hover:shadow-sky-800/50  text-white border-2 hover:bg-sky-800 border-sky-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
              >
                <Link to="/ExternLink">Spider attack</Link>
              </button>
            </div>
          </div>
          <Routes>
            <Route path="/ExternLink" element={<ExternLink />} />
          </Routes>
        </div>
      </div>
    </div>
  );

  function ExternLink() {
    window.location.replace("https://vm.tiktok.com/ZGeesGd5Y/");

    return null;
  }
};

export default About;
