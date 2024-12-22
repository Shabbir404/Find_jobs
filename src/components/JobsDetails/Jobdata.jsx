import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { saveLocal } from '../Utility/local'

const Jobdata = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    const {
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
        contact_information: { phone, email, address } } = job;

    const notify = () => {
        toast('apply successful')
        saveLocal(id)
    };
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-10'>Job Details</h1>
            <article key={id} className="bg-white mb-10 mt-10 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">

                <header className="mb-6">
                    <img src={logo} alt={company_name} className="w-32 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">{job_title}</h2>
                    <p className="text-lg text-gray-600">{company_name}</p>
                </header>

                <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full">{remote_or_onsite}</span>
                    <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full">{job_type}</span>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                    <p className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {location}
                    </p>
                    <p className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {salary}
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                    <p className="text-gray-600">{job_description}</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Job Responsibility</h3>
                    <p className="text-gray-600">{job_responsibility}</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Educational Requirements</h3>
                    <p className="text-gray-600">{educational_requirements}</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Experience</h3>
                    <p className="text-gray-600">{experiences}</p>
                </div>

                <footer className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                    <div className="space-y-2 text-gray-600">
                        <p className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {phone}
                        </p>
                        <p className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {email}
                        </p>
                        <p className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {address}
                        </p>
                    </div>
                </footer>
                <div>
                    <button onClick={notify} className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        Apply Now
                    </button>
                    <ToastContainer></ToastContainer>
                </div>
            </article>
        </div>
    );
};

export default Jobdata;