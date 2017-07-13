//routes/employerRoute.js

import express from 'express';
import Employer from '../model/Employer';
import User from '../model/User';

const router = express.Router();

/*************************************
********GET employer page. (/employer)
**************************************/
router.get('/', (req, res, next) => {
  console.log("There is a GET employer Request");
  Employer.find({}, (err, employers) => {
    if (err) return res.status(404).send('Not found');
    res.json(employers);
  });
});

/*************************************
********CREATE employer page. (/employer)
**************************************/
router.post('/', (req, res, next) => {

  console.log("got POST request...");
  console.log("Current user id: "+req.user.id);
  const _id = req.user.id;
  const email = req.user.email;
  const role = "Employer";
  const name = req.body.name;
  const contact = req.body.contact;
  const address = req.body.address;

  const employer = new Employer({
    _id: _id,
    email: email,
    role: role,
    name: name,
    contact: contact,
    address: address
  });

  console.log("Employer: " + employer);
  employer.save((err, employer) => {
       console.log("Saving employer..",employer);
       res.json(employer);
  });

});

/*************************************
********READ an employer page. (/employer/<id>)
**************************************/
router.get('/:id', (req, res, next) => {
  console.log("There is a GET an Employer Id Request");
  const id = req.params.id;
  console.log("Get from Employer.js: " + id)
  Employer.findById(id, (err, employer) => {
    if (err) return res.status(404).send('Not found');
    res.json(employer);
  });
});

/*************************************
********UPDATE an employer page. (/employer/<id>)
**************************************/
router.put('/:id', (req, res, next) => {
 console.log("There is a PUT employer Request");

 const employer = req.body;
 console.log(employer);
 Employer.findById(employer.employerId, (err,foundEmployer ) => {
    console.log(err);
    if (err) return res.status(400).send('Bad Request');

    if(!foundEmployer){
      return res.status(404).send('Not Found');
    }

    foundEmployer.address = employer.address;
    foundEmployer.contact = employer.contact;
    foundEmployer.name = employer.name;
    foundEmployer.email = employer.email;
    foundEmployer.password = employer.password;

    foundEmployer.save((err, employer)=> {
      if (err) return res.status(400).send('Bad Request');
      res.json(foundEmployer);
    });
 });
});

/*************************************
********DELETE an employer page. (/employer/<id>)
**************************************/
router.delete('/:id', (req, res, next) => {
  console.log("There is a DEL employer Request");

  const id = req.params.id;
  Employer.findById(id, (err, employer) => {
    if (err) return res.status(400).send('Bad Request');

    if(!employer){
      return res.status(404).send('Not Found');
    }

    employer.remove();
    res.json(id+" deleted successfully");
  });
});


export default router;
