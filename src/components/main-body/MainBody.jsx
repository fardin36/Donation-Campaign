import Header from '../header/Header'
import { Outlet } from 'react-router-dom';

const MainBody = () => {
    return (
        <div className='min-h-full'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainBody;