import { useState } from "react";
import logo from "../assets/logo.svg";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

const navLinks = [
  { label: "home", path: "/" },
  { label: "new", path: "/" },
  { label: "popular", path: "/" },
  { label: "trending", path: "/" },
  { label: "categories", path: "/" },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggle = () => setIsMenuOpen((prev) => !prev);
  return (
    <header className="px-4 lg:px-28  py-4">
      <nav className="flex justify-between">
        <img src={logo} alt="logo-img" />
        <button onClick={menuToggle} className="lg:hidden">
        <VscMenu size={40} />
        </button>
        <ul className="lg:flex gap-8 text-[14px] hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                className="text-[#5d5f79] hover:text-[#f15e50] capitalize"
                href={link.path}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    {isMenuOpen && (
        <div className="fixed right-0 top-0 py-4 h-full w-80 bg-white px-7  transition duration-400 ease-in">
        <div className="">
          <button className="lg:hidden absolute top-1 right-1" onClick={menuToggle}>
        <VscChromeClose size={50} className="transition duration-150 ease-in"/>
    </button>
    <ul className="space-y-5 mt-28">
        {navLinks.map((link, index) => (
            <li key={index}>
                <a
                    className="text-black hover:text-[#f15e50] capitalize text-xl font-medium"
                    href={link.path}
                >
                    {link.label}
                </a>
            </li>
        ))}
    </ul>
        </div>
</div>
    )}

    </header>
  );
};

export default Header;
