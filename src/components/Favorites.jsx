import { useEffect, useState } from "react";
import axios from "axios";
import { catOptions } from "../components/options";

export const Favorites = () => {
  const [favorites, setFavorites] = useState(null);
  const [catData, setCatData] = useState([]);
  const fetchData = () => {
    axios
      .get(
        `https://api.thecatapi.com/v1/favourites?sub_id=my-user-1`,
        catOptions
      )
      .then((response) => setFavorites(response.data));
  };

  useEffect(() => {
    fetchData();
    populateArray();
  }, []);

  let populateArray = () => {
    favorites?.map((favorite) => {
      axios
        .get(
          `https://api.thecatapi.com/v1/images/${favorite.image_id}`,
          catOptions
        )
        .then((response) =>
          setCatData((fulldata) => [...fulldata, response.data])
        );
    });
  };

  return (
    <section className="min-h-screen bg-[#133B5C] favorite-container">
      <h1 className="favorite-image-title">Favorites</h1>
      <button className="favorites-button" onClick={populateArray}>
        Load favorites
      </button>
      <div className="favorite-image-grid">
        {catData?.slice(0, 6).map((cat) => (
          <div className="image-button-pair">
            <div> {cat.image_id}</div>
            <img className="grid-image" src={cat.url} />
          </div>
        ))}
      </div>
    </section>
  );
};
