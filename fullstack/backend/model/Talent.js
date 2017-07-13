//model/talentModel.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const user = require ('./User')

// define the schema for our Talent
var talentSchema = mongoose.Schema({
    _id    : {                                            //_id from user
      type: mongoose.Schema.Types.ObjectId,
      ref: user
    },
    email         :{                                      //email from user
      type: mongoose.Schema.Types.String,
      ref: user
    },
    role          : String,                               //role is set as "Talent"
    name          : String,                               //Talent's  name
    contact       : String,                               //contact number
    address       : String,                               //company location
    qualification : String,                               //highest qualification
    skillList     : Array,                                //list of skills
    salary        : Number                              //minimum salary requirement

},{ timestamps: true});

module.exports = mongoose.model('Talent', talentSchema);
