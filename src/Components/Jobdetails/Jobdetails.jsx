import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utility/localStorage";


const Jobdetails = () => {
    const jobs = useLoaderData();
    const  {id} = useParams();
    const idInt =parseInt(id);
    const job =jobs.find(job=>job.id === idInt); 


    const handleApplyButton =()=>{
        saveJobApplication(idInt);
    };
    const {job_description, job_responsibility, educational_requirements, experiences}=job;
    return (
        <div>
            <h2>Job details of : {id}</h2>
            <div className='grid md: grid-cols-4 gap-4 mb-40'>
                <div className='border md:col-span-3 p-4 space-y-2'>
                    <h3><span className='text-base font-medium'>Job Description:</span>
                    <br />
                     {job_description}</h3>
                    <h3><span className='text-base font-medium'>Job Responsibility:</span> 
                    <br />
                    {job_responsibility}</h3>
                    <h3><span className='text-base font-medium'>Educational Requirements:</span> 
                    <br />
                    {educational_requirements}</h3>
                    <h3><span className='text-base font-medium'>Experiences:</span> 
                    <br />
                    {experiences}</h3>
                </div>
                <div className='border col-span-1'>Job
                <button onClick={handleApplyButton} className="btn btn-primary">Apply</button>
                </div>

            </div>
        </div>
    );
};

export default Jobdetails;
