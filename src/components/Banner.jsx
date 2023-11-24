import { AiFillGithub } from "react-icons/ai";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import img from "../assets/spiders/braszka.JPG";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-in-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <>
      <div
        id="Home"
        className="min-h-screen bg-[#133B5C] lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
      >
        <div
          data-aos="fade-up"
          className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-[#e8f5e9]"
        >
          <h1 className="text-[52px] font-semibold mb-8 leading-normal">
            Hello World{" "}
            <span className="text-[#ffff8d]">{"   "} in my world</span>
          </h1>
          <p data-aos="fade-right" className="text-[#fffde7]">
            I have been learning to create websites for more than half a year.
            This is the result of my education so far, combining all this with
            work in a different profession, private life, gym exercises and
            taking care of my favorites, i.e. a dozen or so tarantulas.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div data-aos="fade-left" className="flex space-x-2">
                <a
                  href="https://github.com/Ojbedziedym"
                  className="text-sky-600 hover:text-sky-500 rounded-full glow p-2"
                >
                  <AiFillGithub className="text-[28px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-doniak-a525671b5/"
                  className="text-sky-600 hover:text-sky-500 rounded-full glow p-2"
                >
                  <FaLinkedin className="text-[28px]" />
                </a>
                <a
                  href="https://www.facebook.com/adam.doniak/"
                  className="text-sky-600 hover:text-sky-500 rounded-full glow p-2"
                >
                  <FaFacebookSquare className="text-[28px]" />
                </a>
                <a
                  href="https://www.instagram.com/ojbedziedym/"
                  className="text-sky-600 hover:text-sky-500 rounded-full glow p-2"
                >
                  <FaInstagramSquare className="text-[28px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-down"
          src={img}
          width={390}
          height={390}
          className="rounded-s-full border-2 p-1 border-sky-500 img_glow"
          alt=""
        />
      </div>
    </>
  );
};

export default Banner;
