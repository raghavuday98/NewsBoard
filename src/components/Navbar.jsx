import { FaBeer } from 'react-icons/fa';

function Navbar() {
  return <div>
   <div className="w-screen h-[10vh] flex border-b-1 border-black-900 flex bg-gray-400 ">
    <div className="w-[25vh] h-[7vh] bg-[url('assets/logo.png')] bg-cover m-3"></div>
    <div>
        <input type="text" placeholder="Search..."/>
        {/* <ImSearch /> */}
    </div>
   </div>

  </div>;
}

export default Navbar;
