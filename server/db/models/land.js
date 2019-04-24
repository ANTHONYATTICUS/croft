const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Land = new Schema({
  city: {
    type: String
  },
  acres: {
    type: String
  },
  description: {
    type: String
  },
  leaseRate: {
    type: Number
  },
//  photos: []
// 	local: {
// 		email: { type: String, unique: true },
// 		password: { type: String }
// 	},
// 	google: {
// 		id: { type: String },
// 		photos: []
// 	},
// 	firstName: { type: String },
// 	lastName: { type: String }
// })

},{
    collection: 'vacancy'
});

module.exports = mongoose.model('Land', Land);