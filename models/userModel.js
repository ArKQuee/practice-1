const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9]+$/, "Name should contain only alphabets"],
  },
  email: {
    type: String,
    required: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email",],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: validatepassword,
      message: "Password should contain atleast one uppercase, one lowercase, one number and one special character",
       }
  },
  dateOfBirth: {
    type: Date,
    required: true,  
    validate: {
      validator: validateAge,
      message: "Age should be greater than 18"
    } 
  },
});

function validatepassword(password) {
  return (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*()_+{}|:"<>?]/.test(password)
  )
}

function validateAge(dateOfBirth) {
  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  return age >= 18;
}
module.exports = mongoose.model("User", userSchema);