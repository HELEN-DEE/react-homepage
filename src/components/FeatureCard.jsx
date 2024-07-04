

const FeatureCard = ({item}) => {
    
return (
    <div className="flex items-center gap-3 pb-4">
            <img src={item.img} alt="retro-pcs" className="h-[110px]"/>
            <div className="flex flex-col gap-1">
                <h1 className="text-[#f15e50] text-3xl font-bold">{item.label}</h1>
                <p className="text-[#00001a] font-bold hover:text-[#f15e50] ease-in duration-150">{item.mainText}</p>
                <p className="text-[#5d5f79] text-[14px]">{item.subText}</p>
            </div>
    </div>
)
}

export default FeatureCard
