import { useEffect, useState } from "react";
import { catOptions } from "../components/options";
import { apiKey } from "../components/apiKey";
import axios from "axios";

export const CatsApi = () => {
  const [catData, setCatData] = useState(null);
  const fetchData = () => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?format=json&limit=10",
        catOptions
      )
      .then((response) => setCatData(response.data))
      .catch((error) => console.error("error during fetching"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnClick = (e) => {
    e.preventDefault();
    fetchData();
  };

  const onClickAdd = (event, catId) => {
    event.preventDefault();

    const catAddFavoriteOptions = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    };
    var data = {
      image_id: catId,
      sub_id: "my-user-1",
    };

    axios
      .post(
        "https://api.thecatapi.com/v1/favourites",
        data,
        catAddFavoriteOptions
      )
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="main-container min-h-screen" id="CatsApi">
      <div className="image-grid">
        {catData?.slice(0, 4).map((cat) => (
          <div className="image-button-pair">
            <img className="grid-image" src={cat.url} />
            <button
              className="grid-button"
              onClick={(event) => onClickAdd(event, cat.id)}
            >
              <span className="material-symbols-outlined bg-slate-600 m-4 rounded-3xl text-yellow-400 ">
                favorite
              </span>
            </button>
          </div>
        ))}
      </div>

      <div className="main-container-description">
        <h2 className="text-[48px] text-[#23ab56] main-container-title">
          Cat Image Generator
        </h2>
        <div className="text-[16px] text-green-400 main-container-text">
          Cat paradise is where you can click on the button below to get random
          images of cats. Click on the Add button to add them to your favorites.
        </div>
        <button
          className="main-container-button bg-green-300 border-r-2 rounded-full"
          onClick={handleOnClick}
        >
          Randomize
        </button>
      </div>
    </section>
  );
};

export default CatsApi;
