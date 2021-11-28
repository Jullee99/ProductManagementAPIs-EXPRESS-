const express = require("express");
const app = express();
app.use(express.json());
const port =  5000;

const productRouter = require("./routers/product");
const sellerRouter = require("./routers/seller");
const companyRouter = require("./routers/company");

app.use("/product",productRouter);
app.use("/seller",sellerRouter);
app.use("/company",companyRouter);

app.listen(port, () => {console.log(`App listen on ${port}`);});