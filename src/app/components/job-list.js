'use client';

import {React, Fragment, useEffect, useState, useDebugValue} from "react";
import Link from "next/link";
import Image from "next/image";
import Job from './job';

const tags = [
    {
        id: 1,
        name: "Full Time"
    },
    {
        id: 2,
        name: "Freelance"
    },
    {
        id: 3,
        name: "Worldwide"
    
    }
]

const JobList = ({ jobs }) => {

    return ( 
        <div className="w-full max-w-4xl place-self-center">
         
            <div className="flex flex-col align-center w-full max-w-4xl h-full ">
                <h1 className="text-4xl text-center my-2">Latest Remote Jobs</h1>

                { 
                    jobs.map(job => (
                        <Job key={job.id} id={job.id} title={job.title} department={job.department} company={job.department_job_departmentTodepartment.name} expiration={job.expiration_date} country={job.country_job_countryTocountry.name} tags={tags}/>
                    ))
                }
            </div>

            <div className="text-center"><button  className="bg-remotify-lb text-remotify-db px-6 rounded-md py-2">Load More Jobs</button></div>
        </div>

);
}
 
export default JobList;