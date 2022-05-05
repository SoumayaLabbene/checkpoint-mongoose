const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/ConnectDB')
const userSchema = require('./models/User')

connectDB()

/* Create model */
let person = User.model('User', userSchema)

/* Create a document instance using the Person constructor */
// var p1 = new person();
// p1.name = "soumaya";
// p1.age = 23;
// p1.favoriteFoods = ["Pasta", "Cheesecake"];
// p1.save(function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log("created successfully");
// });

/* Create Many Records with model.create() */
// person.create(
//   [
//     {
//       name: 'ranim',
//       age: 22,
//       favoriteFoods: ['pasta with tuna', 'pizza'],
//     },
//     {
//       name: 'emna',
//       age: 23,
//       favoriteFoods: ['burger', 'cheese'],
//     },
//     {
//       name: 'skander',
//       age: 22,
//       favoriteFoods: ['nuggets', 'cheese'],
//     },
//   ],
//   function (err, data) {
//     if (err) {
//       return console.log.error(err)
//     }
//     return console.log('created successfully')
//   },
// )

/* Find all the people having a given name, using Model.find() */
// person
//   .find({
//     name: 'ranim',
//   })
//   .then((doc) => {
//     console.log(doc)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

/* Find just one person who has a certain food in the person's favorites, using Model.findOne() */
// person
//   .findOne({
//     favoriteFoods: 'Pasta',
//   })
//   .then((doc) => {
//     console.log(doc)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

/* Find the (only!!) person having a given _id, using Model.findById() */
// person
//   .findById('627418e22448a8c748b19354') // search query
//   .then((doc) => {
//     console.log('The person with this id is: ')
//     console.log(doc)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

/*Find a person by _id with. Add "hamburger" to the list of the person's favoriteFoods
 Then - inside the find callback - save() the updated person*/

// person.findById('627418e22448a8c748b19354', (error, result) => {
//   if (error) {
//     console.log(error)
//   } else {
//     result.favoriteFoods.push('hamburger')
//     result.save((error, updatedResult) => {
//       if (error) {
//         console.log(error)
//       } else {
//         console.log('Success: adding favourite food')
//       }
//     })
//   }
// })

/* Find a person by Name and set the person's age to 20 */
// person.findOneAndUpdate(
//   { name: 'ranim' },
//   { $set: { age: 20 } },
//   { new: true },
//   (err, doc) => {
//     if (err) {
//       console.log('Something wrong when updating data!')
//     }

//     console.log('Data updated successfully')
//   },
// )

/* Delete One Document Using model.findByIdAndRemove */
// person.findByIdAndRemove('62741cd414460be508961400', function (err, docs) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Removed User : ', docs)
//   }
// })

/*Delete all the people whose name is “emna”*/
// person.remove({ name: 'emna' }, (error, JSONStatus) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('success : remove', JSONStatus)
//   }
// })

/*Find people who like cheese. Sort them by name, limit the results to two documents,
 and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec()*/
// person
//   .find({ favoriteFoods: { $all: ['pizza'] } })
//   .sort({ name: 'asc' })
//   .limit(2)
//   .select('-age')
//   .exec((error, filteredResults) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log('find/sort/limit/select : success', filteredResults)
//     }
//   })

const port = 5555
app.listen(port),
  (err) => (err ? console.log('Error') : console.log(`running on port ${port}`))
