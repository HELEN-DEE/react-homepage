import mainImage from "../assets/image-web-3-desktop.jpg"
import firstImg from "../assets/image-retro-pcs.jpg"
import secondImg from "../assets/image-top-laptops.jpg"
import thirdImg from "../assets/image-gaming-growth.jpg"

const Homepage = () => {
    return (
        <div className="mx-[7rem] my-9 ">
            <div className="flex gap-7">
                <div className="w-[68%] ">
                    <img src={mainImage} alt="main-img" className=""/>
                    <div className="flex pt-8 justify-between">
                        <h1 className="capitalize text-5xl font-bold text-[#00001a] w-[40%]">
                            The bright future of web 3.0?
                        </h1>
                        <div className="w-[50%]">
                            <p className="leading-6 text-[#5d5f79] text-[14px]">
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fufilling its promise?
                            </p>
                            <button className="uppercase bg-[#f15e50] text-[#00001a] tracking-[4px] px-6 py-3 font-extrabold mt-6 text-md hover:bg-[#00001a] hover:text-[#fffdfa] ease-in duration-200">
                                read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#00001a] w-[32%]  px-5 flex flex-col gap-1 justify-center ">
                    <h2 className="text-[#e9ab53] text-3xl font-bold">
                        New
                    </h2>
                    <div className="text-[#fffdfa] ">
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
                    <img src={firstImg} alt="retro-pcs" className="h-[110px]"/>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[#f15e50] text-3xl font-bold">01</h1>
                        <p className="text-[#00001a] font-bold hover:text-[#f15e50] ease-in duration-150">Reviving Retro PCs</p>
                        <p className="text-[14px] text-[#5d5f79]">What happens when old PCs are given modern upgrades</p>
                    </div>

                    <img src={secondImg} alt="top-laptops" className="h-[110px]"/>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[#f15e50] text-3xl font-bold">02</h1>
                        <p className="text-[#00001a] font-bold hover:text-[#f15e50] ease-in duration-150">Top 10 Laptops of 2022 </p>
                        <p className="text-[14px] text-[#5d5f79]">Our best picks for various needs and budgets</p>
                    </div>
                    
                    <img src={thirdImg} alt="game-growth" className="h-[110px]"/>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[#f15e50] text-3xl font-bold">03</h1>
                        <p className="text-[#00001a] font-bold hover:text-[#f15e50] ease-in duration-150">The Growth of Gaming</p>
                        <p className="text-[14px] text-[#5d5f79]">How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            
        </div>
    );
};

export default Homepage
