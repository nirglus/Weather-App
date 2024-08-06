const express = require("express");
const cors = require("cors");
const weatherRouter = require("./routes/weather.routes");

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());

app.use("/api/weather", weatherRouter);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});