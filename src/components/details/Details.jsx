import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeDonation } from '../../utility/localStorage';


const Details = () => {

    const id = useParams();
    const items = useLoaderData();
    // console.log(items);
    const item = items.find(item => item.id == id.id);

    const handleDonate = () => {

        const toastCondition = storeDonation(item.id);

        if (toastCondition) {
            toast.success(<><div className='text-center text-lg font-bold'>Donation Completed!</div> <div className='text-center text-lg font-bold'>Thanks a lot!!</div></>, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
        else {
            toast.info(<div className='text-center text-lg font-bold'>Already Donated! You can donate in other categories! Thanks for your kindness.</div>, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    };

    return (
        <>
            <div className='md:px-16 md:py-9 lg:px-32'>
                <div className='w-full relative bg-slate-600'>
                    <img className='w-full' src={item.picture.url1} alt="" />
                    <div className='absolute bottom-0 bg-[#0B0B0B80] w-full p-9 flex justify-start items-center'>
                        <Link >
                            <button onClick={() => handleDonate()} className="btn btn-primary border-none px-6 py-4"
                                style={{ background: item.text_color }}>Donate ${item.price}</button>
                        </Link>
                    </div>
                </div>
                <div className='py-14'>
                    <h2 className='font-bold text-4xl pb-6'>{item.title}</h2>
                    <p className='font-normal text-base'>{item.description}</p>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default Details;