const express = require('express');
const dotenv = require('dotenv');
const routes = require("./routes")
const cors = require("cors")
dotenv.config();

const app = express()
app.use(cors({
    origin:"http://localhost:3000"
}))

const port = process.env.PORT;
routes(app)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});