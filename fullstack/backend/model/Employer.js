// model/Employer.js

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const user = require ('./User');

// define the schema for our Employer
var employerSchema = mongoose.Schema({
    _id    : {                  //_id  from user model
      type: mongoose.Schema.Types.ObjectId,
      ref: user
    },
    email         :{                  //email from user model
      type: mongoose.Schema.Types.String,
      ref: user
    },
    role          : String,                           //role is set as "Employer"
    name          : String,                           //Employer's company name
    contact       : String,                           //contact number
    address       : String                            //Employer business address
},{ timestamps: true });


module.exports = mongoose.model('Employer', employerSchema);
