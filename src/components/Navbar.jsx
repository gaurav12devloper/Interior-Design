import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// './Navbar.css'; // Import your CSS file
import { Link as ScrollLink } from 'react-scroll';
import { BsArrowRight } from "react-icons/bs";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    // Array containing navigation items
    const navItems = [
      { id: 1, text: 'Home' },
      { id: 2, text: 'About' },
      { id: 3, text: 'Review' },
      { id: 4, text: 'Contact' },
      { id: 5, text: 'Footer' },
    ];

  return (
    <nav className="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
      <a href="#" id="brand" className="flex gap-2 items-center flex-1">
        <img className="object-cover max-w-22 max-h-12" src="https://images.squarespace-cdn.com/content/v1/5af47dcce17ba3f07d350ac4/1525980606136-49OYNF1TU53M3GYPLOXC/static1.squarespace-4.png?format=500w" alt="Logo" />
        {/* <span className="text-lg font-medium font-display">Icrave</span> */}
      </a>
      <div id="nav-menu" className="hidden lg:flex gap-12 mr-5">
        {navItems.map(item => (
          <ScrollLink key={item.id} to={item.text} smooth={true} duration={500} className={`font-medium hover:text-gray-400 cursor-pointer text-black no-underline hover:no-underline`}>{item.text}</ScrollLink>
        ))}
      </div>
      <div className="hidden lg:flex flex-1 justify-end">
        <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          <ScrollLink to="Contact" smooth={true} duration={500} className="font-display font-medium">Contact Us</ScrollLink>
          <BsArrowRight className="duration-500 text-md group-hover:translate-x-1" />
        </button>
      </div>

      <button className="p-2 lg:hidden" onClick={handleMenu}>
        {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {isMenuOpen && (
        <div id="nav-dialog" className="fixed z-10 md:hidden bg-white inset-0 p-3">
          <div id="nav-bar" className="flex justify-between">
            <a href="#" id="brand" className="flex gap-2 items-center">
            <img className="object-cover max-w-20 ml-5 max-h-20" src="https://images.squarespace-cdn.com/content/v1/5af47dcce17ba3f07d350ac4/1525980606136-49OYNF1TU53M3GYPLOXC/static1.squarespace-4.png?format=500w" alt="Logo" />
              {/* <img className="object-cover max-w-12 max-h-12" src="./assets/asset 0.png" alt="Logo" /> */}
              {/* <span className="text-lg ml-2 font-medium font-display">Icave</span> */}
            </a>
            <button className="p-2 md:hidden" onClick={handleMenu}>
              <AiOutlineClose size={24} className="text-gray-600" />
            </button>
          </div>
          <div className="mt-6">
            {navItems.map(item => (
              <a key={item.id} href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">{item.text}</a>
            ))}
          </div>
          <div className="h-[1px] bg-gray-300 "></div>
          <ScrollLink to="Contact" smooth={true} duration={500} className="mt-6 w-full flex gap-2 cursor-pointer border-b mb-2 items-center px-6 py-4 rounded-lg hover:bg-gray-50">
          <BsArrowRight className="duration-500 text-md group-hover:translate-x-1" />
            <span>Contact Us</span>
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
