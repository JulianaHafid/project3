/*
 *  Search Jobs
 */
export const searchJobs = (searchTerm, Jobs) => {

  if(searchTerm !== ""){
    return Jobs.filter((job) => {
      console.log(job)
        return job.title.toLowerCase().includes(searchTerm);
    });
  }
  return Jobs;
}
