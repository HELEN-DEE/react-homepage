import mainImage from "../assets/image-web-3-desktop.jpg"
import FeatureCard from "./FeatureCard";

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
        <div className="mx-[7rem] mt-9 "> 
            <div className="flex gap-8 ">
                <div className=" ">
                    <img src={mainImage} alt="main-img" className=""/>
                    <div className="flex pt-8 justify-between">
                        <h1 className="capitalize text-6xl font-extrabold text-[#00001a] w-[47%]">
                            The bright future of web 3.0?
                        </h1>
                        <div className="w-[47%]">
                            <p className="leading-6 text-[#5d5f79] text-[14px]">
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fufilling its promise?
                            </p>
                            <button className="uppercase bg-[#f15e50] text-[#00001a] tracking-[4px] px-6 py-3 font-extrabold mt-6 text-md hover:bg-[#00001a] hover:text-[#fffdfa] ease-in duration-200">
                                read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#00001a] w-[65%]  px-5  flex flex-col gap-1 justify-center ">
                    <h2 className="text-[#e9ab53] text-3xl font-bold">
                        New
                    </h2>
                    <div className="text-[#fffdfa]">
                        <h3 className="font-bold text-lg pt-3 hover:text-[#e9ab53] ease-in duration-150">Hydrogen VS Electric Cars</h3>
                        <p className="text-[14px] text-[#c5c6ce] pb-4 leading-7">
                        Will hydrogen-fueled cars ever catch up to EVs?
                        </p>
                        <hr className="border-[#c5c6ce] border-[0.3px]" />

                        <h3 className="font-bold text-lg pt-3 hover:text-[#e9ab53] ease-in duration-150">The Downsides of AI Artistry</h3>
                        <p className="text-[14px] text-[#c5c6ce] pb-4 leading-7">
                        What are the possible adverse effects of on-demand AI image generation?
                        </p>
                        <hr className="border-[#c5c6ce] border-[0.3px]"/>

                        <h3 className="font-bold text-lg pt-3 hover:text-[#e9ab53] ease-in duration-150">Is VC Funding Drying Up?</h3>
                        <p className="text-[14px] text-[#c5c6ce]  leading-7">
                        Private funding by VC firms is down 50% YOY. We take a look at what that means.
                        </p>
                    </div>
                </div>
            </div>


            
                <div className="flex pt-[5rem] gap-5">
                    {featureCards.map((feature, index) => (
                        <FeatureCard key={index} item={feature}/>
                    ))}

                </div> 
            
        </div>
    );
};



export default Homepage
