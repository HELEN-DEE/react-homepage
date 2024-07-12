import logo from "../assets/logo.svg";

const navLinks = [
    {label: "home", path: "/"}, 
    {label: "new", path: "/"}, 
    {label: "popular", path: "/"}, 
    {label: "trending", path: "/"}, 
    {label: "categories", path: "/"}
]
const Header = () => {
    return (
        <header className="px-4 lg:px-28  py-4">
            <div className="flex justify-between">
                <img src={logo} alt="logo-img"/>
                <ul className="lg:flex gap-8 text-[14px] hidden"> 
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-[#5d5f79] hover:text-[#f15e50] capitalize" href={link.path}>
                                {link.label}
                            </a>
                        </li>

                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header
