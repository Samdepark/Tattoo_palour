let express = require("express");
let app = express();
let userRoutes = require("./routes/user");
const connectDatabase = require("./Config/MongoDB");
const productRoutes = require("./routes/productRoute");
const { errorHandler, notFound } = require("./middlewares/Errors.js");

//collect secret files from .env
require("dotenv").config();
const port = process.env.PORT || 3500;

//connection to database
connectDatabase();

//middlewares to convert files to json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//using user route
app.use(userRoutes);

app.use("api/import", ImportData);
app.use("api/products", productRoutes);
//error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
