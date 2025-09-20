import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ErrorPage from "../ErrorPage/ErrorPage";

const Root = () => {
    return (
    <div className="mx-auto px-4 max-w-[1200px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
            <Navbar></Navbar>
            {/*nav ar footer er majhkhane ache outlet
            karon nav ar footer thakbe fix baki jinis change
            hobe tai outlet lagbe  */}
            <Outlet></Outlet>

            
            <Footer></Footer>
            <ToastContainer position="top-center" autoClose={1800} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="light" toastStyle={{ marginTop: '64px' }} />
        </div>
    );
};

export default Root;