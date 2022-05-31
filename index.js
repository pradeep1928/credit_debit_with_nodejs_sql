const express = require("express");
const dotenv = require("dotenv");
const http = require("http");

// Configurations 
dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res) => {
    res.send("<h2>Credit and Debit</h2>");
})



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listining to port ${port}`);
})
