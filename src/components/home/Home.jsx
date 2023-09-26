import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';
import { useState } from 'react';

const Home = () => {

    const [searchData, setSearchData] = useState('');

    const mainItems = useLoaderData();
    const items = mainItems.filter((item) => item.category.toLowerCase().includes(searchData.toLowerCase()));

    return (
        <>
            <div className="hero min-h-[20rem] md:min-h-[27rem]" style={{ backgroundImage: 'url(./banner.png)' }}>
                <div className="hero-overlay bg-[#FFFFFFF2]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <form onSubmit={(e) => {e.preventDefault(); setSearchData(e.target.Search.value)}} action="" className="flex justify-center items-center gap-0">
                            <input className="h-12 rounded-l-lg flex-shrink-0 border-y border-l pl-2 md:pl-4 bg-white text-black w-44 md:w-full max-w-sm" type="search" name="Search" id="search-field" placeholder="Search here...." />
                            <input className="btn btn-primary h-12 rounded-l-none rounded-r-lg text-white border-none bg-[#FF444A]" type="submit" value="Search" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 py-3 md:py-0 md:px-16 lg:px-32 xl:px-32 place-items-center mb-10'>
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
        </>
    );
};

export default Home;