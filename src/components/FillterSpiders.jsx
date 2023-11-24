/* eslint-disable react/prop-types */
const FillterSpiders = ({ filter, updateFilter }) => {
  return (
    <div className="h-20 w-full flex bg-blue-300">
      <nav className="w-full m-2 flex justify-center items-center gap-4">
        <div
          className={filter ? "header-mi" : "header-mi active"}
          onClick={() => updateFilter(false)}
        >
          My beloved spiders
        </div>
        <div
          className={filter ? "header-mi active" : "header-mi"}
          onClick={() => updateFilter(true)}
        >
          Spiders for beginners
        </div>
      </nav>
      <div className="header__logo"></div>
    </div>
  );
};

export default FillterSpiders;
