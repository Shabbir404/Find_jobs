import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const AppliedJobList = ({ job }) => {
    const {
        id,
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        contact_information
    } = job;

    return (
        <div className="flex justify-between mt-4 p-4 border mb-5 shadow-none">
            <div className="w-full mx-auto flex mb-4 ">
                <div className="place-content-center  bg-gray-100 p-2">
                    <img src={job.logo} alt="" />
                </div>
                <div className="ml-10">
                    <h1 className="text-2xl text-gray-700 font-bold ">{job.job_title}</h1>
                    <p className="text-gray-500 mt-2">{job.company_name}</p>
                    <div className="flex">
                        <p className="border-2 font-bold border-indigo-600
                     text-violet-800 w-20 rounded text-center mt-2">{job.remote_or_onsite}</p>
                        <p className="border-2 font-bold border-indigo-600
                     text-violet-800 w-20 rounded text-center ml-2 mt-2">{job.job_type}</p>
                    </div>

                    <div className="flex mt-2">
                        <div className="flex mt-2">
                            <IoLocationOutline className="mt-0.5"></IoLocationOutline>
                            <p className="ml-2 text-gray-600">{job.location}</p>
                        </div>
                        <div className="flex mt-2 ml-6">
                            <RiMoneyDollarCircleLine className="mt-0.5"></RiMoneyDollarCircleLine>
                            <p className="ml-2 text-gray-600">${job.salary}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <Link to={`/job/${id}`}
                    className="btn text-white bg-gradient-to-r
                 from-indigo-500 via-purple-500 to-pink-500 mt-8">Details</Link>
            </div>
        </div>
    );
};

export default AppliedJobList;