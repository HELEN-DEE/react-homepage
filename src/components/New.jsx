

const newLink = [
    {
        mainText: "Hydrogen VS Electric Cars",
        subText: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        mainText: "The Downsides of AI Artistry",
        subText: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        mainText: "Is VC Funding Drying Up",
        subText: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
];

const New = () => {
    return (
        <div className="bg-[#00001a] px-5 py-6  ">
            <h2 className="text-[#e9ab53] text-4xl font-bold py-2">
                New
            </h2>
            <div className="text-[#fffdfa] space-y-7">
                {newLink.map((item, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-lg pt-2 hover:text-[#e9ab53] ease-in duration-150">{item.mainText}</h3>
                        <p className="text-[14px] text-[#c5c6ce] pb-4 leading-7">{item.subText}</p>
                        {index < newLink.length - 1 && (
                            <hr className="border-[#c5c6ce] border-[0.3px] mt-2" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default New;
