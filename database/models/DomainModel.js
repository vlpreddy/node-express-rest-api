const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
   name:String,
   domainUrl:String,
   price:Number,
   discount:Number,
   domainOwner:String,
   sellingType:String
},
{timestamps:true});

module.exports = mongoose.model('Domain', DomainSchema);