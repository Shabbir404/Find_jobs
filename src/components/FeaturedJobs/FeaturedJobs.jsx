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
            <h1 className='font-bold text-center text-5xl mb-4 mt-10'>Featured Jobs</h1>
            <p className='text-gray-400 text-center mb-10 '>Explore thousands of job opportunities with all the information you need.
                Its your future</p>
            <div className='grid gap-4 grid-cols-2 '>
                {
                    jobs.map(job => <Job key={job.id} job={job}> </Job>)
                }
            </div>
            <div className='text-center'>
                <Link className='btn mb-5 text-white bg-gradient-to-r
                from-indigo-500 via-purple-500 to-pink-500 mt-4 text-center'>See all jobs</Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;