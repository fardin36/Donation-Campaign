import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";
import DonationCard from "./DonationCard";

const Donation = () => {

    const items = useLoaderData();
    const [donated, setDonated] = useState([]);
    const [donatedToShow, setDonatedToShow] = useState(0);

    useEffect(() => {
        const storedDonations = getStoredDonations();
        const donated = items.filter(item => storedDonations.includes(item.id));
        setDonated(donated);
        if (donated.length > 4) {
            setDonatedToShow(4);
        }
        else {
            setDonatedToShow(donated.length);
        }
    }, []);

    return (
        <div className="pb-8 flex flex-col items-center">
            <div className='grid lg:grid-cols-2 gap-6 px-2 pt-3 md:py-0 md:px-16 lg:px-32 xl:px-32 place-items-center'>
                {donated?.slice(0, donatedToShow).map(item =>
                    <DonationCard
                        key={item.id}
                        id={item.id}
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
            <div className={donated.length == donatedToShow ? 'hidden' : ''}>
                <button onClick={() => setDonatedToShow(donated.length)} className="btn btn-primary my-5" type="button">See all</button>
            </div>
        </div>
    );
};

export default Donation;