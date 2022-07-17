import express from "express";
import cors from "cors";
const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const UserRoutes = require("./routes/user.routes");
const ProductRoutes = require("./routes/product.routes");

app.use('/user', UserRoutes);
app.use('/products', ProductRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

