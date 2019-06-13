const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  // adresse: {
  //   rue: {
  //     type: String
  //   }
  // }
});

// contactSchema.pre('save', () => {

// });

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
