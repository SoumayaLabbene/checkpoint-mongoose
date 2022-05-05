const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')
const { Schema, model } = mongoose
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
})

module.exports = User = model('User', userSchema)
