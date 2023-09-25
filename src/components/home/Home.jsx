import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';

const Home = () => {

    const items = useLoaderData();

    return (
        <div className='grid grid-cols-4 gap-6 lg:px-32 xl:px-32'>
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