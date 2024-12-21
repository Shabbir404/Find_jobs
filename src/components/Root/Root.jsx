import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Nav/Navbar";

const Root = () => {
    return (
        <div className="w-9/12 mx-auto mt-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;