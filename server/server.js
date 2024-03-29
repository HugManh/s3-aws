const express = require("express");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const routes = require("./routes");

const app = express();

app.use(cors());
// app.use(express.static("client"));
app.use(cookieParser());
app.use(fileUpload());

/**
 * Routers
 */
app.use("/", routes.routeS3);
app.get("/", (req, res) => {
  res.json({
    message: "Hello Friend :)",
  });
});

/**
 * Create server
 */
const port = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
