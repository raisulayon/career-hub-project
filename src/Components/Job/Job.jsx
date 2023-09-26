import { MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-32" src={logo} alt={company_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h2 className="text-sm font-semibold">{company_name}</h2>
        <div>
          <button className="px-5 py-2 font-extrabold mr-4 rounded border border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold mr-4 rounded border border-[#7E90FE]">
            {job_type}
          </button>
        </div>

        <div className='flex'>
          <p className="flex items-center mr-2">
            <MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn> {location}
          </p>
          <p className="flex items-center mr-2">
            <PiCurrencyCircleDollarBold className="text-xl"></PiCurrencyCircleDollarBold>
            {salary}
          </p>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
