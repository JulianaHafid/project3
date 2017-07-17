// //routes/jobRoute.js
//
import express from 'express';
import Job from '../model/Job';
import Employer from '../model/Employer';
import Talent from '../model/Talent';

const router = express.Router();

/*************************************
************ GET all Jobs /job
***************************************/

router.get('/', (req, res, next) => {
  console.log("got GET request");
  Job.find({}, (err, jobs) => {
    console.log(jobs);
    if (err) return res.status(404).send('Not found');
    res.json(jobs);
  });
});

/*************************************
************ Create Job  /job
***************************************/
router.post('/', (req, res, next) => {
  console.log("got POST request...");
  console.log("Current user email: "+req.user.email);
  Employer.findById(req.user.id, (err, foundEmployer) => {
    console.log(foundEmployer);
    if (err) return res.status(400).send('Bad Request');

    if(!foundEmployer){
      return res.status(404).send('Not Found');
    }


    const title = req.body.title;
    const employer = foundEmployer;
    const maxSalary = req.body.maxSalary;
    const qualification = req.body.qualification;
    const closingDate = req.body.closingDate;
    const skillList = req.body.skillList;
    const talentList = req.body.talentList;


    const job = new Job({
      title: title,
      maxSalary: maxSalary,
      qualification: qualification,
      closingDate: closingDate,
      skillList: skillList,
      talentList: talentList,
      employer: employer
    });

    console.log(job);
    job.save((err, job) => {
         console.log("Saving..",job);
         res.json(job);
    });
  });
});

/*************************************
************ Read Job /job/<id>
***************************************/
router.get('/:id', (req, res, next) => {

  const id = req.params.id;
  Job.findById(id, (err, job) => {
    if (err) return res.status(404).send('Not found');
    res.json(job);
  });
});


/*************************************
************ Update Job /job/<id>
***************************************/
router.put('/:id', (req, res, next) => {
 console.log("Got PUT Request");

 const job = req.body.job;

 Job.findById(job._id, (err, foundJob) => {
    if (err) return res.status(400).send('Bad Request');

    if(!foundJob){
      return res.status(404).send('Not Found');
    }

    foundJob.title = job.title;
    foundJob.employer = job.employer;
    foundJob.maxSalary = job.maxSalary;
    foundJob.qualification = job.qualification;
    foundJob.skillList = job.skillList;
    foundJob.closingDate = job.closingDate;
    foundJob.talentList = job.talentListjob;

    foundJob.save((err, job)=> {
      if (err) return res.status(400).send('Bad Request');
      res.json(foundJob);
    });

  });
});


/*************************************
************ Update Job /job/<id>
***************************************/
router.delete('/:id', (req, res, next) => {

const id = req.params.id;
Job.findById(id, (err, job) => {
  if (err) return res.status(400).send('Bad Request');

  if(!job){
    return res.status(404).send('Not Found');
  }
  job.remove();
  res.json("ok");
  });
});


export default router;
