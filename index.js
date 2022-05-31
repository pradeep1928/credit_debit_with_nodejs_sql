const express = require("express");
const dotenv = require("dotenv");

const db = require("./models/index");
const userRoute = require("./routes/user.route");

// Configurations 
dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
// db.sequelize.sync();




app.get('/', (req, res) => {
    res.send("<h2>Credit and Debit</h2>");
})

app.use("/user", userRoute);
// app.use("//transaction", transctionsRoute);




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listining to port ${port}`);
})
