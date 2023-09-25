import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";
import DonationCard from "./DonationCard";

const Donation = () => {

    const items = useLoaderData();
    const [donated, setDonated] = useState([]);

    useEffect(() => {
        const storedDonations = getStoredDonations();
        const donated = items.filter(item => storedDonations.includes(item.id))
        setDonated(donated);
    }, []);
    console.log(donated);



    return (
        <div className='grid lg:grid-cols-2 gap-6 md:px-16 lg:px-32 xl:px-32 place-items-center'>
            {donated?.map(item =>
                <DonationCard
                    key={item.id}
                    image2={item.picture.url2}
                    category={item.category}
                    title={item.title}
                    category_bg={item.category_bg}
                    card_bg={item.card_bg}
                    text_color={item.text_color}
                    price={item.price}
                ></DonationCard>
            )}
        </div>
    );
};

export default Donation;