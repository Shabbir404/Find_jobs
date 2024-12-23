import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../Utility/local";
import AppliedJobList from "./AppliedJobList/AppliedJobList";

const AppliedJob = () => {
    const [appliedAllJobs, setAppliedAllJobs] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        const storedJobIds = getStoredJobs();
        if (jobs.length > 0) {
            const appliedJobs = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(storedJobIds, appliedJobs);
            setAppliedAllJobs(appliedJobs);
        }
    }, []);

    return (
        <div>
            {appliedAllJobs.map(job =>
                <AppliedJobList key={job.id} job={job} />
            )}
        </div>
    );
};

export default AppliedJob;
