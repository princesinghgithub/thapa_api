require('dotenv').config()
const express = require("express");
const app = express();
const connectDb=require('./db/connect');
const product_routes=require('./routes/product');



const PORT = process.env.PORT || 5000
app.get('/', (req, res) => [
    res.send("send call")
]);

// middle ware use
app.use('/api/product',product_routes);

const start = async () => {
       
    try {
    await connectDb();
        app.listen(PORT, () => {
            console.log(`${PORT} yes i am connected`);
        })
    } catch (error) {
         console(error);
    }
}

start();
