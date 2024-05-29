const express = require("express");
const connection = require("./config/db");
const morgan=require("morgan");
const cors = require("cors");
const usersroutes = require("./Routes/users.routes");
const postsroutes = require("./Routes/post.routes");
const analytics = require("./Routes/analytics.routes");

const PORT = process.env.PORT || 3059;
const app = express();

// app.use(cors());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST, GET, PATCH, DELETE');
        return res.status(200).send({});
    }
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use("/users", usersroutes);
app.use("/posts", postsroutes);
app.use("/analytics", analytics);

app.listen(PORT, () => {
  connection();
  console.log("server started", PORT);
});
