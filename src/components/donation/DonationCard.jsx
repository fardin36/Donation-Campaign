import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const DonationCard = ({ id, image2, category, title, category_bg, card_bg, text_color, price }) => {
    return (
        <div className="h-36 max-h-[12.5rem] md:h-full w-full max-w-2xl rounded-lg flex justify-start items-center">
            <div className="h-full">
                <img className="h-full" src={image2} alt={`${category} category image`} />
            </div>
            <div className="p-2 md:p-4 lg:py-2 xl:py-4 rounded-r-lg h-full flex-grow flex flex-col justify-center items-start" style={{ background: card_bg }}>
                <span className='px-[0.625rem] md:py-1 rounded-[0.25rem] font-normal text-sm' style={{ background: category_bg, color: text_color }}>{category}</span>
                <h1 className='font-semibold md:text-2xl md:py-2 lg:py-1 xl:py-2 text-[#0B0B0B]'>{title}</h1>
                <p className='font-semibold text-base md:pb-5 lg:pb-3 xl:pb-5' style={{ color: text_color }}>${price}</p>
                <Link to={`/details/${id}`}>
                    <button className="btn btn-primary btn-sm md:btn-md border-none px-3 md:py-2 md:px-4 rounded-[0.25rem] font-semibold text-white flex justify-center items-center"
                        style={{ background: text_color }}>View Details</button>
                </Link>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    id: PropTypes.number,
    image2: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    category_bg: PropTypes.string,
    card_bg: PropTypes.string,
    text_color: PropTypes.string,
    price: PropTypes.number,
}

export default DonationCard;