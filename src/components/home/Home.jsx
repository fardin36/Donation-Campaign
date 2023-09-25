import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';

const Home = () => {

    const items = useLoaderData();
    // console.log(items);

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:px-16 lg:px-32 xl:px-32 place-items-center'>
            {items?.map(item =>
                <HomeCard
                    key={item.id}
                    id={item.id}
                    image1={item.picture.url1}
                    category={item.category}
                    title={item.title}
                    category_bg={item.category_bg}
                    card_bg={item.card_bg}
                    text_color={item.text_color}
                ></HomeCard>
            )}
        </div>
    );
};

export default Home;