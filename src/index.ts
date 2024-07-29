import express from "express";
import { routes as employeesRoutes } from "./infrastructure/routes/employeesRoute";
import { alumnosRoutes } from "./infrastructure/routes/alumnosRoute";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Configuración del middleware
app.use(bodyParser.json());

app.use("/employees", employeesRoutes);
app.use("/alumnos", alumnosRoutes);

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT: ${PORT}`);
});
