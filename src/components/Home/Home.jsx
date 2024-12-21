import { Link } from "react-router-dom";
import userPng from "../../assets/user.png"
import "./Home.css"

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

            <div>

            </div>

        </div>


    );
};

export default Home;