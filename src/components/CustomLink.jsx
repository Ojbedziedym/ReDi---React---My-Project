import { Link } from "react-scroll";
// eslint-disable-next-line react/prop-types
const CustomLink = ({ to, children }) => (
  <Link spy={true} smooth={true} to={to}>
    <li className="my-4 py-4 border-l-slate-800 hover:bg-[#03C4A1] hover:rounded cursor-pointer">
      {children}
    </li>
  </Link>
);

export default CustomLink;
