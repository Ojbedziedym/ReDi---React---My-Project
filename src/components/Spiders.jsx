/* eslint-disable react/prop-types */
import { GiDeathSkull } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";

const Spiders = ({ list }) => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-column flex-col-reverse justify-between items-center p-0 rounded-md">
      {list.map((spiders, id) => (
        <div
          className="bg-[#b3cde0] mt-4 p-4 sm: flex-wrap rounded-3xl flex"
          key={id}
        >
          <figure className="min-w-[200px] h-52 overflow-hidden flex justify-center rounded-3xl pl-0 pr-8">
            <img
              className="h-full"
              src={spiders.img}
              alt={spiders.name}
              width={400}
            />
          </figure>
          <div>
            <h2 className="text-bold text-[30px] text-[#005b96]">
              {spiders.title}
            </h2>
            <p className="text-[16px] text-[#123fff]">{spiders.description}</p>
            <div className="pt-4 font-bold flex space-x-32 sm: flex-wrap">
              <span className="mr-10 m-3">
                <GiDeathSkull />
                {spiders.venom}
              </span>
              <span className="m-3">
                <GiWorld />
                {spiders.location}
              </span>
              <span className="m-3">
                <FaQuestion />
                {spiders.typ}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spiders;
