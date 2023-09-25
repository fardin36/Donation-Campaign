
const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donation-list');
    if (storedDonations) {
        return JSON.parse(storedDonations);
    }
    return [];
};


const storeDonation = id => {

    const storedDonations = getStoredDonations();
    const exist = storedDonations.find(donationId => donationId === id);
    if (!exist) {
        storedDonations.push(id);
        localStorage.setItem('donation-list', JSON.stringify(storedDonations));
        return true;
    }
    else {
        return false;
    }
};




export {getStoredDonations, storeDonation};