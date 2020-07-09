const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const path = require('path');
const cors = require('cors');
require("dotenv").config();

//Import Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true, useUnifiedTopology: true 
})
.then(() => console.log("DB connected"))
.catch(err => console.log(err));

const port = process.env.PORT || 8000;

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/", categoryRoutes);

//Server static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
    
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"../client","build","index.html"));
    });
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
