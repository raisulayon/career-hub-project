const getStoredApplication = ()=>{
    const storedJobApplication = localStorage.getItem('job-application');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id =>{
    const storedJobApplication = getStoredApplication();
    const exist = storedJobApplication.find(jobId=>jobId===id);
    if(!exist){
    storedJobApplication.push(id);
    localStorage.setItem('job-application', JSON.stringify(storedJobApplication))
    }
}

export {getStoredApplication, saveJobApplication}