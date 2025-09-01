const express = require("express");
const dotenv = require("dotenv");
require("dotenv/config");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());



const PortNo = process.env.PORT_NO || 8080;
const MONGOOSE_URL = process.env.MONGOOSE_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;



const corsOption = {
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
};

app.use(express.json());
app.use(cors(corsOption));


mongoose
   .connect(MONGOOSE_URL)
   .then(() => {
    console.log("dn connected");
   })

   .catch((error) => {
    console.log(error);
   })

   const user = require("./routes/user.routes");
   app.use("/api/user", user);

   app.listen(PortNo, () => console.log(`server is up & running at ${PortNo}`));