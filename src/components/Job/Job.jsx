import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
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
        <div className="w-auto h-auto">

            <div className="border p-4 mt-2 ">
                <img src={job.logo} alt="" />
                <h2 className="mt-5 font-bold text-2xl text-gray-600">{job.job_title}</h2>
                <p className="mt-2">{job.company_name}</p>
                <div className="mt-2 flex">
                    <button className="btn btn-outline btn-primary">{job.remote_or_onsite}</button>
                    <button className="btn btn-outline btn-primary ml-4">{job.job_type}</button>
                </div>
                <div className="mt-4 flex text-gray-600">
                    <p className="flex gap-2"><IoLocationOutline className="mt-0.5"></IoLocationOutline>{job.location}</p>
                    <p className="ml-5 flex"><RiMoneyDollarCircleLine className="mt-0.5 mr-1"></RiMoneyDollarCircleLine>
                        {job.salary}</p>
                </div>
                <Link to={`/job/${id}`} className="btn text-white bg-gradient-to-r
                from-indigo-500 via-purple-500 to-pink-500 mt-4">Viwe Details
                </Link>
            </div>

            <div>

            </div>

        </div>
    );
};

export default Job;