/* eslint-disable react/prop-types */
import brachypelma from "../assets/spiders/SpiderList/brachypelma.jpeg";
import chromka from "../assets/spiders/SpiderList/chromka.jpeg";
import electric from "../assets/spiders/SpiderList/electric.jpeg";
import maculata from "../assets/spiders/SpiderList/maculata.jpeg";
import mira from "../assets/spiders/SpiderList/mira.jpeg";
import murinus from "../assets/spiders/SpiderList/murinus.jpeg";
import pulchripes from "../assets/spiders/SpiderList/pulchripes.jpeg";
import regalis from "../assets/spiders/SpiderList/regalis.jpeg";
import regius from "../assets/spiders/SpiderList/regius.jpeg";
import seladonia from "../assets/spiders/SpiderList/seladonia.jpeg";
import solaris from "../assets/spiders/SpiderList/solaris.jpg";
import stromka from "../assets/spiders/SpiderList/stromka.jpeg";
import versi from "../assets/spiders/SpiderList/versi.jpeg";
import xenesthis from "../assets/spiders/SpiderList/xenesthis.jpeg";
import "../assets/styles/spiders.css";
import Spiders from "../components/spiders";
import FillterSpiders from "../components/FillterSpiders";
import { useState } from "react";

const MyHobby = () => {
  const spiders = [
    {
      id: "1",
      title: "Brachypelma smithi",
      img: brachypelma,
      typ: "ground",
      location: "Mexico",
      description:
        "Brachypelma smithi is a species of spider in the family Theraphosidae (tarantulas) native to Mexico. It has been confused with Brachypelma hamorii; both have been called Mexican redknee tarantulas.",
      noobFriendly: "true",
      venom: "weak",
    },
    {
      id: "2",
      title: "Chromatopelma cyaneopubescens",
      img: chromka,
      typ: "ground",
      location: "Venezuela",
      description:
        "Commonly known as greenbottle blue tarantulas due to their metallic blue legs and blue-green carapace, they are very active and fast-growing tarantulas that are particularly attractive to hobbyists. They are native to the Paraguaná Peninsula.",
      noobFriendly: "true",
      venom: "weak",
    },
    {
      id: "3",
      title: "Chilobrachys natanicharum",
      img: electric,
      typ: "underground",
      location: "Thailand",
      description:
        "Chilobrachys natanicharum is a species of tarantulas in the genus Chilobrachys that is native to the country of Thailand, specifically in mangroves and forest regions.",
      skilledFriendly: "true",
      venom: "strong",
    },
    {
      id: "4",
      title: "Heteroscodra maculata",
      img: maculata,
      typ: "arboeral",
      location: "Togo and Ghana",
      description:
        "Heteroscodra maculata specimens are quite fast, defensive and possess potent venom. As these are old-world species, they do not possess urticating hairs, which further encourages them to bite as a primary defense.",
      skilledFriendly: "true",
      venom: "strong",
    },
    {
      id: "5",
      title: "Idiothele mira",
      img: mira,
      typ: "underground",
      location: "South Africa",
      description:
        "Idiothele mira, also known as the blue-foot baboon or the trap-door tarantula, is a species of tarantula endemic to South Africa and is popularized by hobbyists[citation needed] for the striking blue coloration on the ventral side of the tarsi and metatarsi on each leg.",
      skilledFriendly: "true",
      venom: "strong",
    },
    {
      id: "6",
      title: "Pterinochilus murinus",
      img: murinus,
      typ: "ground",
      location: "Tansania",
      description:
        "The orange baboon tarantula is very defensive, and will bite immediately if provoked. Consequently, it is not recommended that hobbyists keep this species without extensive prior experience handling venomous spiders. The female excavates a burrow, or colonizes an existing burrow that has been abandoned.",
      skilledFriendly: "true",
      venom: "strong",
    },
    {
      id: "7",
      title: "Harpactira pulchripes",
      img: pulchripes,
      typ: "ground",
      location: "South Africa",
      description:
        "This spider is a fossorial Old World tarantula. Though it is part of the Harpactirinae, known for being aggressive, this tarantula is the exception, having a noticeably more relaxed temper than other in its subfamily.",
      skilledFriendly: "true",
      venom: "strong",
    },
    {
      id: "8",
      title: "Poecilotheria regalis",
      img: regalis,
      typ: "arboreal",
      location: "India",
      description:
        "The behavior of P. regalis parallels that of many arboreal spiders. In the wild individuals live in holes in tall trees where they make asymmetric funnel webs. Their primary prey consists of various flying insects, which they seize in flight and paralyze. It is not unknown for the spiders of this genus to live communally when territory, i.e. the number of holes per tree, is limited. They tend to be quite defensive spiders.",
      skilledFriendly: "true",
      venom: "strong",
    },
    {
      id: "09",
      title: "Typhochlaena seladonia",
      img: seladonia,
      typ: "arboreal",
      location: "Brazil",
      description:
        "Typhochlaena seladonia is a species of aviculariine tarantula, and is the type species of the genus Typhochlaena.[1] It is unique as an arboreal spider that constructs trapdoors in the bark of trees. The common name is the Brazilian jewel tarantula.",
      noobFriendly: "true",
      venom: "weak",
    },
    {
      id: "10",
      title: "Solaris",
      img: solaris,
      typ: "ground",
      location: "Colombia",
      description:
        "One of the only Pamphobeteus species that both males and females are beautiful! The females will max out at about 8 and have an attitude to match. An interesting thing about this species is that they have spines on their rear legs that they will use for warding off predators and have an amazing feeding response. This species could easily take down small lizards, rodents and potentially birds if given the chance. They also can be territorial so proper care needs to be taken when handling this species.",
      noobFriendly: "true",
      venom: "weak",
    },
    {
      id: "11",
      title: "Stromatopelma calceatum",
      img: stromka,
      typ: "arboreal",
      location: "Sierra Leone",
      description:
        "They are an arboreal old world tarantula, creating a tube like web, in the lower forest regions. They are quite a defensive tarantula, and will usually stay inside their webs until night. Though adults are arboreal, younger specimens have been observed burrowing.",
      skilledFriendly: "true",
      venom: "strong",
    },
    {
      id: "12",
      title: "Caribena versicolor",
      img: versi,
      typ: "arboreal",
      location: "Martinique",
      description:
        "Spiderlings of C. versicolor are bright blue with a black tree trunk pattern on the abdomen. As they grow, they gradually lose their blue coloration; the carapace turns green, the abdomen red, and the legs turn green with pink tarsi and a covering of purple hairs. Males usually are slightly more brightly colored than females. As in most tarantula species, males do not grow as large as females, and their abdomens are smaller than those of females, even in proportion to their size.",
      noobFriendly: "true",
      venom: "weak",
    },
    {
      id: "13",
      title: "Xenesthis sp. Blue",
      img: xenesthis,
      typ: "ground",
      location: "Colombia",
      description:
        "A look at the Xenesthis sp. Blue is enough to make any tarantula enthusiast's heart beat faster. With its impressive appearance in bright blue, this tarantula is guaranteed to attract everyone's attention. The combination of intense coloring and elegant patterns makes it a true jewel in your collection. Immerse yourself in the world of Xenesthis sp. Blue and enjoy the magnificent beauty of this unique species.",
      noobFriendly: "true",
      venom: "weak",
    },
    {
      id: "14",
      title: "Phidippus regius",
      img: regius,
      typ: "arboreal",
      location: "Bahamas",
      description:
        "Phidippus regius, known commonly as the regal jumper,[1] is a species of jumping spider in eastern North America. P. regius is most commonly found in relatively open areas, such as fields and light woodland, with adults usually preferring trees or the walls of buildings as hunting grounds. They build silken nests at night in which to sleep, often in palm fronds or similar areas. Females of the species lay their eggs under the bark of trees, or in secluded spots in wooden structures such as barns.",
      noobFriendly: "true",
      venom: "weak",
    },
  ];

  const [noobFriendly, setNoobFriendly] = useState(false);
  const updateStatus = (value) => {
    setNoobFriendly(value);
  };

  const spidersForBeginners = spiders.filter((spiders) => spiders.noobFriendly);

  return (
    <div className="m-0 w-100 " data-aos="fade-right" id="MyBelovedSpidersList">
      <h1
        data-aos="fade-right"
        className="text-[52px] max-w-3xl font-semibold mb-8 ml-10 justify-center leading-normal text-[#2962ff] uppercase"
      >
        My spiders list
      </h1>
      <FillterSpiders
        filter={noobFriendly}
        updateFilter={updateStatus}
        data-aos="fade-down"
      />
      <Spiders list={noobFriendly ? spidersForBeginners : spiders} />
    </div>
  );
};
export default MyHobby;
