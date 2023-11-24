import { Component } from "react";
import Slider from "react-slick";
import sidlisz from "../assets/spiders/sidlisz.jpeg";
import darownik from "../assets/spiders/darownik.jpeg";
import maratus from "../assets/spiders/maratus.jpeg";
import blondi from "../assets/spiders/blondi.jpeg";
import hogna from "../assets/spiders/hogna.jpeg";
import przadka from "../assets/spiders/przadka.jpeg";

export default class FunnyFactsAboutSpiders extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 20,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="min-h-screen bg-[#133B5C]" id="FunnyFactsAboutSpiders">
        <Slider {...settings}>
          <div>
            <div className="min-h-screen lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
              <img
                data-aos="fade-down"
                src={sidlisz}
                width={600}
                height={600}
                className="rounded-e-full border-2 p-1 border-sky-500 img_glow"
                alt=""
              />
              <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1
                  data-aos="fade-right"
                  className="text-[52px] font-semibold mb-8 leading-normal text-[#2962ff] uppercase"
                >
                  Amaurobius ferox
                </h1>
                <p data-aos="fade-left" className="text-[#90caf9]">
                  At the end of the incubation period, the mother breaks open
                  the egg sac allowing her 40 to 135 spiderlings to emerge into
                  the world. Within their first few days of emerging, the mother
                  lays trophic eggs for her offspring to consume. At the end of
                  their first week, the spiderlings begin to molt, and finally,
                  1 or 2 days later when the molting process is complete, the
                  spiderlings cannibalize their mother.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                id="About"
                className="bg-[url('/assets/styles/skakun-tlo-1.jpg')] min-h-screen lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
              >
                <img
                  data-aos="fade-down"
                  src={darownik}
                  width={600}
                  height={600}
                  className="rounded-s-full border-2 p-1 border-sky-500 img_glow"
                  alt=""
                />
                <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                  <h1
                    data-aos="fade-right"
                    className="text-[52px] font-semibold mb-8 leading-normal text-[#2962ff] uppercase"
                  >
                    Pisaura mirabilis
                  </h1>
                  <p data-aos="fade-left" className="text-[#90caf9]">
                    In order for the male to gain the females favor, he must
                    prepare a gift for her. To do this, it catches what spiders
                    like the most, e.g. a large, fat fly, which it wraps in a
                    silk thread. With the bonbon box prepared in this way, he
                    can go in search of a female. However, it is not certain
                    whether he will be able to impress her, because she will
                    need special encouragement. The male waves his front legs at
                    her and shows his gift, hoping that the spider girl will be
                    tempted by him. If he succeeds, the guy is lucky, if not...
                    its hard to say. After all, such a gift cannot go to waste,
                    so he unwraps it the next day and consumes its contents
                    himself.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              id="About"
              className="bg-[url('/assets/styles/skakun-tlo-1.jpg')] min-h-screen lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
            >
              <img
                data-aos="fade-down"
                src={maratus}
                width={600}
                height={600}
                className="rounded-e-full border-2 p-1 border-sky-500 img_glow"
                alt=""
              />
              <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1
                  data-aos="fade-right"
                  className="text-[52px] font-semibold mb-8 leading-normal text-[#2962ff] uppercase"
                >
                  Maratus volans
                </h1>
                <p data-aos="fade-left" className="text-[#90caf9]">
                  Maratus volans is a species in the jumping spider family
                  (Salticidae), belonging to the genus Maratus (peacock
                  spiders). These spiders are native to certain areas in
                  Australia and occupy a wide distribution of habitats. They
                  have a specialized visual system that allows them to see the
                  full visible spectrum as well as in the ultraviolet-range;
                  this helps them detect and pursue prey. Males of this species
                  are characterized by their colourful abdomen flaps that are
                  used to attract females during courtship.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              id="About"
              className="bg-[url('/assets/styles/skakun-tlo-1.jpg')] min-h-screen lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
            >
              <img
                data-aos="fade-down"
                src={blondi}
                width={500}
                height={500}
                className="rounded-s-full border-2 p-1 border-sky-500 img_glow"
                alt=""
              />
              <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1
                  data-aos="fade-right"
                  className="text-[52px] font-semibold mb-8 leading-normal text-[#2962ff] uppercase"
                >
                  Theraphosa blondi
                </h1>
                <p data-aos="fade-left" className="text-[#90caf9]">
                  These spiders can have a leg span of up to 30 cm (12 in),[4] a
                  body length of up to 13 cm (5.1 in), and can weigh up to 175 g
                  (6.2 oz).[5] Birdeaters are one of the few tarantula species
                  that lack tibial spurs, located on the first pair of legs of
                  most adult males. They are mostly tan to light brown and
                  golden-hued.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              id="About"
              className="bg-[url('/assets/styles/skakun-tlo-1.jpg')] min-h-screen lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
            >
              <img
                data-aos="fade-down"
                src={hogna}
                width={600}
                height={600}
                className="rounded-e-full border-2 p-1 border-sky-500 img_glow"
                alt=""
              />
              <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1
                  data-aos="fade-right"
                  className="text-[52px] font-semibold mb-8 leading-normal text-[#2962ff] uppercase"
                >
                  Hogna radiata
                </h1>
                <p data-aos="fade-left" className="text-[#90caf9]">
                  This species gives birth to 50-200 young. For the first few
                  weeks, females carry cocoons attached to spinnerets under
                  their abdomen. After leaving the cocoon, the young go to the
                  top of the females abdomen, which they leave after a few or a
                  dozen days. Then they become independent and try to separate
                  themselves from the young ones
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              id="About"
              className="bg-[url('/assets/styles/skakun-tlo-1.jpg')] min-h-screen lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
            >
              <img
                data-aos="fade-down"
                src={przadka}
                width={450}
                height={450}
                className="rounded-s-full border-2 p-1 border-sky-500 img_glow"
                alt=""
              />
              <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1
                  data-aos="fade-right"
                  className="text-[52px] font-semibold mb-8 leading-normal text-[#2962ff] uppercase"
                >
                  Nephila pilipes
                </h1>
                <p data-aos="fade-left" className="text-[#90caf9]">
                  These spiders weave webs with an area often exceeding one
                  square meter. They are so sturdy that in some countries they
                  are used for fishing. Birds or other small vertebrates are
                  often caught in these spiders webs - but these are not their
                  proper food, which consists of insects and other invertebrates
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
