//model/Job.js

// load the things we need
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const talent = require ('./Talent')
const employer = require ('./Employer')

// define the schema for our Employer
var jobSchema = mongoose.Schema({
  title         : String,             //Job title
  maxSalary     : String,             //max salary
  qualification : String,             //min qualification
  skillList     : Array,              //list of skills
  closingDate   : String,             //closing date for this job
  talentList    : [{                  //an array of Talent id who applied for this position
    type: mongoose.Schema.Types.ObjectId,
    ref: talent
  }],
  employer      : employer.schema      //contains an Employer information

}, { timestamps: true });

// create the model for employer and expose it to our app
module.exports = mongoose.model('Job', jobSchema);
