
const getStoredJobs = () => {
    const findStorageApplication = localStorage.getItem('job-application')
    if (findStorageApplication) {
        return JSON.parse(findStorageApplication)
    }
    return [];

}
const saveLocal = id => {
    const storedJobApply = getStoredJobs()
    const exists = storedJobApply.find(JobId => JobId === id);
    if (!exists) {
        storedJobApply.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApply));
    }
}

export { saveLocal, getStoredJobs };