import { Router } from "express";
import { AlumnosController } from "../controllers/AlumnosController";
import { getFormularioByAlumnoNombreUseCase, getFormularioByAlumnoIdMatriculaUseCase } from "../dependencies";

const router = Router();
const alumnosController = new AlumnosController(getFormularioByAlumnoNombreUseCase, getFormularioByAlumnoIdMatriculaUseCase);

router.get("/formularios/nombre", alumnosController.getFormulariosByAlumnoNombre);
router.get("/formularios/id_matricula", alumnosController.getFormulariosByAlumnoIdMatricula);

export { router as alumnosRoutes };
