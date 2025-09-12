import { ImSearch } from "react-icons/im";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className="w-full h-20 flex items-center justify-between border-b-1 border-zinc-300 bg-zinc-100 z-50">
        <div className="w-40 h-11 ml-5">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
        <div className="w-80 h-10 flex items-center justify-between p-5 border-1 border-zinc-400  bg-white rounded-full hover:shadow-sm">
         <div className="text-xl text-zinc-400  bg-white"><ImSearch /></div>
          <input className="outline-0 w-75 ml-2" type="text" placeholder="Search for news..." />
        </div>
        <div className="w-90 flex items-center justify-around font-['Newsreader'] text-base font-medium">
          <a href="" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="" className="hover:text-blue-600 transition">
            Contact
          </a>
          <a href="" className="hover:text-blue-600 transition text-2xl">
            <FaRegUserCircle />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
