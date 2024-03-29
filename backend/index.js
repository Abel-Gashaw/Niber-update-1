// To connect with your mongoDB database
const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://aradom:leake@cluster0.68ef6yl.mongodb.net/niberdb") //mongodb://localhost:27017/niberdb  mongodb+srv://aradom:leake@cluster0.68ef6yl.mongodb.net/niberdb?retryWrites=true&w=majority
  .then(() => console.log("connected successfully"))
  .catch((err) => {
    console.error(err);
  });

// Schema for users of app
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("users", UserSchema);
User.createIndexes();

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());

app.get("/users", (req, resp) => {
  //addedusers
  resp.send("App is Working");
  // You can check backend is working or not by
  // entering http://loacalhost:5000
  // If you see App is working means
  // backend working properly
  user
    .find()
    .then((users) => resp.json(users))
    .catch((err) => resp.json(err));
});
//register

app.post("/niberdb", async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already register");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});
app.listen(5000);
