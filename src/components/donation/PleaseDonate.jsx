import { Link } from 'react-router-dom';

const PleaseDonate = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(./donate.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">YOU HAVEN'T DONATED YET?</h1>
                    <p className="mb-5">Please donate for the people in need. Yor donation will make their life more easier. Plese!...</p>
                    <Link to={'/'} className="btn btn-primary">{`Donate-->`}</Link>
                </div>
            </div>
        </div>
    );
};

export default PleaseDonate;