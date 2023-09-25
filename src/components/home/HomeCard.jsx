import { Link } from 'react-router-dom';

const HomeCard = ({ id, image1, category, title, category_bg, card_bg, text_color }) => {

    return (

        <Link to={`/details/${id}` }>
            <div className="h-full max-w-[19.5rem] rounded-lg">
                <div className="">
                    <img src={image1} alt={`${category} category image`} />
                </div>
                <div className="p-4 rounded-b-lg" style={{ background: card_bg }}>
                    <span className='px-[0.625rem] py-1 rounded-[0.25rem] font-medium text-sm' style={{ background: category_bg, color: text_color }}>{category}</span>
                    <h1 className='font-semibold text-xl pt-2' style={{ color: text_color }}>{title}</h1>
                </div>
            </div>
        </Link>

    );
};

export default HomeCard;