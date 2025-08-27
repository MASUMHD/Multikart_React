import NavBar from '../Share page/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Share page/Footer';

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;