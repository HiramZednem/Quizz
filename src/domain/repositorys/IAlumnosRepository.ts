import { Alumnos } from "../entities/Alumnos";
import { Formulario } from "../entities/Formulario";

export interface IAlumnosRepository {
    getAlumnos(): Promise<Alumnos[] | null>;
    createAlumnos(id_matricula: number, nombre: string, email: string): Promise<Alumnos | null>;
    getByIdAlumnos(id_matricula: number): Promise<Alumnos | null>;

    // Nuevos métodos para los casos de uso
    getFormularioByAlumnoNombre(nombre: string, quizzId: number): Promise<Formulario[] | null>;
    getFormularioByAlumnoIdMatricula(id_matricula: number, quizzId: number): Promise<Formulario[] | null>;
}