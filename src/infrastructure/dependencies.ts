import { AlumnosRepository } from "../infrastructure/repositories/AlumnosRepository";
import { CreateAlumnosUseCase } from "../application/CreateAlumnosUseCase";
import { GetFormularioByAlumnoNombreUseCase } from "../application/GetFormularioByAlumnoNombreUseCase";
import { GetFormularioByAlumnoIdMatriculaUseCase } from "../application/GetFormularioByAlumnoIdMatriculaUseCase";
import { AlumnosController } from "./controllers/AlumnosController";

// Repositorios
const alumnosRepository = new AlumnosRepository();

// Casos de uso con repositorios como parámetros
const createAlumnos = new CreateAlumnosUseCase(alumnosRepository);
const getFormularioByAlumnoNombre = new GetFormularioByAlumnoNombreUseCase(alumnosRepository);
const getFormularioByAlumnoIdMatricula = new GetFormularioByAlumnoIdMatriculaUseCase(alumnosRepository);

// Controladores con sus casos de uso
export const alumnosController = new AlumnosController(
    createAlumnos, 
    getFormularioByAlumnoNombre, 
    getFormularioByAlumnoIdMatricula
);