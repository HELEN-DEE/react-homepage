import mainImage from "../assets/image-web-3-desktop.jpg"
import FeatureCard from "./FeatureCard";
import New from './New';

import firstImg from "../assets/image-retro-pcs.jpg"
import secondImg from "../assets/image-top-laptops.jpg"
import thirdImg from "../assets/image-gaming-growth.jpg"

const featureCards = [
    {   label: "01", 
        img: firstImg, 
        mainText: "Reviving Retro PCs", 
        subText: "What happens when old PCs are given modern upgrades"
    },
    {   label: "02", 
        img: secondImg, 
        mainText: "Top 10 Laptops of 2022 ", 
        subText: "Our best picks for various needs and budgets"
    },
    {   label: "03", 
        img: thirdImg, 
        mainText: "The Growth of Gaming", 
        subText: "How the pandemic has sparked fresh opportunities."
    }
]
const Homepage = () => {
    return (
        <div className="px-4 lg:px-28 py-4"> 
            <div className=" grid lg:grid-cols-3 gap-6">
                <div className="grid lg:col-span-2">
                    <img src={mainImage} alt="main-img" className="grid col-span-1"/>
                    <div className="grid lg:grid-cols-2 gap-x-10 lg:pt-6">
                        <h1 className="capitalize text-5xl font-extrabold text-[#00001a] lg:py-0 py-2">
                            The bright future of web 3.0?
                        </h1>
                        <div className="pb-6">
                            <p className="leading-6 text-[#5d5f79] text-[14px] pb-6 lg:pb-8">
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fufilling its promise?
                            </p>
                            <button className="uppercase bg-[#f15e50] text-[#00001a] tracking-[4px] px-6 py-3 font-extrabold  text-md hover:bg-[#00001a] hover:text-[#fffdfa] ease-in duration-200">
                                read more
                            </button>
                        </div>
                    </div>
                </div>
                <New />
            </div>


            
                <div className="lg:flex pt-[5rem] gap-5">
                    {featureCards.map((feature, index) => (
                        <FeatureCard key={index} item={feature}/>
                    ))}

                </div> 
            
        </div>
    );
};



export default Homepage
