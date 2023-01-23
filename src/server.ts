import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(contactRoutes);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
