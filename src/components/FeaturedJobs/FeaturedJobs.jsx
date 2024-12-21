import React, { useEffect, useState } from 'react';
import { data, Link } from 'react-router-dom';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            {/* featured jobs singles show */}
            {
                jobs.map(job => <Job key={job.id} job={job}> </Job>

                )
            }
            <div>
                <img src="" alt="" />
                <h2></h2>
                <span></span>
                <div>
                    <Link></Link>
                    <Link></Link>
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <Link></Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;