import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Utility/localStorage";

const Appliedjobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilterButton = filter=>{
    if(filter==='all'){
        setDisplayJobs(appliedJobs)
    }
    else if(filter==='remote'){
        const remoteJobs=appliedJobs.filter(job=>job.remote_or_onsite==='Remote');
        setDisplayJobs(remoteJobs);
    }
    else if(filter==='onsite'){
        const onsiteJobs = appliedJobs.filter(job=>job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storeJobIds = getStoredApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storeJobIds.includes(job.id));

      // const jobsApplied = [];
      // for (const id of storedJobIds) {
      //     const job = jobs.find(job => job.id === id);
      //     if (job) {
      //         jobsApplied.push(job)
      //     }
      // }
      //console.log(jobs, storeJobIds, jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, []);
  return (
    <div>
      <h2>Jobs Applied: {appliedJobs.length}</h2>
      <div className="dropdown flex flex-row-reverse">
        <label tabIndex={0} className="btn m-1">
          Filter
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={()=>handleFilterButton('all')}>
            <a>All</a>
          </li>
          <li onClick={()=>handleFilterButton('remote')}> 
            <a>Remote</a>
          </li>
          <li onClick={()=>handleFilterButton('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>
      <ol>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Appliedjobs;
