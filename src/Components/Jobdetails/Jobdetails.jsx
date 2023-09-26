import { useLoaderData, useParams } from "react-router-dom";


const Jobdetails = () => {
    const jobs = useLoaderData();
    const  {id} = useParams();
    console.log(id, jobs); 
    return (
        <div>
            Hello
        </div>
    );
};

export default Jobdetails;