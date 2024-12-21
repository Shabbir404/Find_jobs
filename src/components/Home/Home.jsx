import { Form, Link } from "react-router-dom";
import userPng from "../../assets/user.png"
import "./Home.css"
import chipPng from "../../assets/chip.png"
import marketingPng from "../../assets/marketing.png"
import creativePng from "../../assets/creative.png"
import accountPng from "../../assets/accounts.png"
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <div className="flex">
                <div className="mt-16">
                    <h1 className="text-6xl font-extrabold leading-tight">One Step <br />
                        Closer To Your <br />
                        <span className="text-violet-400">Dream Job</span></h1>
                    <p className="text-gray-600 leading-7 mt-5">
                        Explore thousands of job opportunities with all the <br />
                        information you need.
                        Its your future.
                        Come find it. Manage all <br />
                        your job application from start to finish.
                    </p>
                    <Link className="btn text-white bg-gradient-to-r
                from-indigo-500 via-purple-500 to-pink-500 mt-4 ">Get started</Link>
                </div>
                <div>
                    <img className='all-img' src={userPng} alt="" />
                </div>
            </div>
            {/* job catagory */}
            <div className="text-center mt-14">
                <h1 className="text-4xl font-bold " >Job Category List</h1> <br />
                <span className="text-gray-400">Explore thousands of job opportunities with all the information you need. Its your future</span>
            </div>


            {/* all jobs catagory with icons */}
            <div className="flex align-middle justify-center mt-12 mb-12">
                <Link className="hover-Icons-Caragory duration-200 p-4 ">
                    <div className="p-4">
                        <img src={accountPng} alt="" />
                        <h3 className="font-bold mt-4">Account and finance jobs.</h3>
                        <span className="text-gray-400 mt-1">250+ jobs available.</span>
                    </div>
                </Link>
                <Link className="hover-Icons-Caragory duration-300 p-4 ">
                    <div className="p-4">
                        <img src={chipPng} alt="" />
                        <h3 className="font-bold mt-4">Creative Design jobs</h3>
                        <span className="text-gray-400 mt-1">150+ jobs available.</span>
                    </div>
                </Link>
                <Link className="hover-Icons-Caragory duration-300 p-4 ">
                    <div className="p-4">
                        <img src={marketingPng} alt="" />
                        <h3 className="font-bold mt-4">Marketing and seals jobs.</h3>
                        <span className="text-gray-400 mt-1">100+ jobs available.</span>
                    </div>
                </Link>
                <Link className="hover-Icons-Caragory duration-300 p-4 ">
                    <div className="p-4">
                        <img src={creativePng} alt="" />
                        <h3 className="font-bold mt-4">Engineering jobs</h3>
                        <span className="text-gray-400 mt-1">50+ jobs available.</span>
                    </div>
                </Link>

            </div>

            <FeaturedJobs></FeaturedJobs>

        </div>


    );
};

export default Home;