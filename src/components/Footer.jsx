import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import spider from "../assets/styles/pajak.png";
const Footer = () => {
  return (
    <footer
      className="grid space-x-3 items-center break-normal p-2"
      id="Footer"
    >
      <div className="flex items-center justify-center">
        <img
          src={spider}
          width={300}
          height={300}
          className="flex items-center justify-center"
        />
      </div>
      <div className=" font-xl">
        <p>Copyright &copy; 2023 by Adam Doniak | All Rights Reserved.</p>

        <div className="relative inline-flex content-center items-center p-1 rounded-sm z-1 overlay-hidden cursor-pointer">
          <Link to="Home">
            <FaArrowCircleUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
