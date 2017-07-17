//routes/talentRoute.js

import express from 'express';
import Talent from '../model/Talent';
import User from '../model/User';

const router = express.Router();

/*************************************
********GET talent page. (/talent)
**************************************/
router.get('/', (req, res, next) => {
  console.log("There is a GET Request");
  Talent.find({}, (err, talents) => {
    if (err) return res.status(404).send('Not found');
    res.json(talents);
  });
});

/*************************************
********CREATE talent page. (/talent)
**************************************/
router.post('/', (req, res, next) => {

  console.log("got POST talent request...");

  console.log("Current user id: "+req.user.id);
  const _id = req.user.id;
  const email = req.user.email;
  const role = req.user.role;
  const name = req.body.name;
  const contact = req.body.contact;
  const address = req.body.address;
  const qualification = req.body.qualification;
  const salary = req.body.salary;
  const skillList = req.body.skillList;

  const talent = new Talent({
    _id: _id,
    email: email,
    role: role,
    name: name,
    contact: contact,
    address: address,
    qualification: qualification,
    salary: salary,
    skillList: skillList
  });

  console.log("Talent: " + talent);
  talent.save((err, talent) => {
       console.log("Saving talent..",talent);
       res.json(talent);
  });


});
/*************************************
********READ talent page. (/talent/<id>)
**************************************/
router.get('/:id', (req, res, next) => {
  console.log("There is a GET an Talent Id Request");
  const id = req.params.id;
  console.log(id)
  Talent.findById(id, (err, talent) => {
    if (err) return res.status(404).send('Not found');
    res.json(talent);
  });
});

/*************************************
********UPDATE an talent page. (/talent/<id>)
**************************************/
router.put('/:id', (req, res, next) => {
 console.log("There is a PUT Request");

 const talent = req.body;
 console.log(talent);
 Talent.findById(talent._id, (err,foundTalent ) => {
    console.log(err);
    if (err) return res.status(400).send('Bad Request');

    if(!foundTalent){
      return res.status(404).send('Not Found');
    }

    foundTalent.email = talent.email ;
    foundTalent.name = talent.name;
    foundTalent.contact = talent.contact;
    foundTalent.address = talent.address;
    foundTalent.qualification = talent.qualification;
    foundTalent.skillList = talent.skillList;
    foundTalent.salary = talent.salary;
    foundTalent.password = talent.password;

    foundTalent.save((err, talent)=> {
      if (err) return res.status(400).send('Bad Request');
      res.json(foundTalent);
    });
 });
});

/*************************************
********DELETE a talent page. (/talent/<id>)
**************************************/
router.delete('/:id', (req, res, next) => {

  const id = req.params.id;
  Talent.findById(id, (err, talent) => {
    if (err) return res.status(400).send('Bad Request');

    if(!talent){
      return res.status(404).send('Not Found');
    }

    talent.remove();
    res.json(id+" deleted successfully");
  });
});


export default router;
