const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const userRoute = require ("./routes/User");
const authRoute = require("./routes/Auth");
const authRoute = require("./routes/Post");


dotenv.config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1); // Exit the process with failure
    }
  };
  // Start the server only after connecting to MongoDB
  connectDB();



//Middleware

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", authRoute);

app.listen(8800, ()=>{
    console.log("Backend running")
})