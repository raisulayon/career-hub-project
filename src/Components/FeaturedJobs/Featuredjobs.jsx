import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const Featuredjobs = () => {

    const [jobs, setJobs]=useState([]);
    const [dataLength, setDataLength]=useState(4);
   

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    }, []);

    return (
        <div>
            <h2 className='text-5xl font-bold text-center'>Featured Jobs: {jobs.length}</h2>
            <p className="text-base font-medium text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={setDataLength===jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show More</button>
            </div>
        </div> 
    );
};

export default Featuredjobs;