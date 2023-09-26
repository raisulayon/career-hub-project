import Banner from "../Banner/Banner";
import Featuredjobs from "../FeaturedJobs/Featuredjobs";
import Jobscategory from "../JobsCategory/Jobscategory";


const Home = () => {
    return (
        <div>
            <h2>This is Homepage</h2>
            <Banner></Banner>
            <Jobscategory></Jobscategory>
            <Featuredjobs></Featuredjobs>
        </div>
    );
};

export default Home;