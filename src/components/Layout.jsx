import Header from './Header';
import SideMenu from './SideMenu';
import {Outlet} from 'react-router';


const Layout = () => {
    return(
        <>
            <Header />
            <SideMenu />
            <Outlet />
        </>
    )
}

export default Layout