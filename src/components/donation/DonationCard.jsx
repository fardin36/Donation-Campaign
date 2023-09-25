import { Link } from "react-router-dom";

const DonationCard = ({ image2, category, title, category_bg, card_bg, text_color, price }) => {
    return (
        <div className="h-36 max-h-[12.5rem] md:h-full w-full max-w-2xl rounded-lg flex justify-start items-center">
            <div className="h-full">
                <img className="h-full" src={image2} alt={`${category} category image`} />
            </div>
            <div className="p-4 rounded-r-lg h-full flex-grow flex flex-col justify-center items-start" style={{ background: card_bg }}>
                <span className='px-[0.625rem] md:py-1 rounded-[0.25rem] font-normal text-sm' style={{ background: category_bg, color: text_color }}>{category}</span>
                <h1 className='font-semibold text-lg md:text-2xl md:py-2 text-[#0B0B0B]'>{title}</h1>
                <p className='font-semibold text-base md:pb-5' style={{ color: text_color }}>${price}</p>
                <Link >
                    <button className="btn btn-primary border-none px-3 md:py-2 md:px-4 rounded-[0.25rem] font-semibold text-white flex justify-center items-center"
                        style={{ background: text_color }}>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default DonationCard;