import React, { useEffect, useState } from 'react';
import { data, Link } from 'react-router-dom';
import Job from '../Job/Job';
import Jobdata from '../JobsDetails/Jobdata';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    // data lenght handle simply///
    const [dataLenght, setDatalenght] = useState(4);
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
                    jobs.slice(0, dataLenght).map(job => <Job key={job.id} job={job}> </Job>)
                }
            </div>
            <div className={dataLenght === jobs.length && 'hidden'}>
                <div className='text-center'>
                    <button onClick={() => setDatalenght(jobs.length)}
                        className='btn mb-5 text-white bg-gradient-to-r
                from-indigo-500 via-purple-500 to-pink-500
                mt-4 text-center'> See all jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;