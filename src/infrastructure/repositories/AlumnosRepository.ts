import { IAlumnosRepository } from "../../domain/repositorys/IAlumnosRepository";
import { Alumnos } from "../../domain/entities/Alumnos";
import { Formulario } from "../../domain/entities/Formulario";

export class AlumnosRepository implements IAlumnosRepository {
    private alumnos: Alumnos[] = [];
    private formularios: Formulario[] = [];

    async getAlumnos(): Promise<Alumnos[] | null> {
        return this.alumnos;
    }

    async createAlumnos(id_matricula: number, nombre: string, email: string): Promise<Alumnos | null> {
        const newAlumno = { id_matricula, nombre, email };
        this.alumnos.push(newAlumno);
        return newAlumno;
    }

    async getByIdAlumnos(id_matricula: number): Promise<Alumnos | null> {
        return this.alumnos.find(alumno => alumno.id_matricula === id_matricula) || null;
    }

    async getFormularioByAlumnoNombre(nombre: string, quizzId: number): Promise<Formulario[] | null> {
        const alumno = this.alumnos.find(a => a.nombre === nombre);
        if (!alumno) return null;
        return this.formularios.filter(f => f.id_matricula === alumno.id_matricula && f.id_quizz === quizzId) || null;
    }

    async getFormularioByAlumnoIdMatricula(id_matricula: number, quizzId: number): Promise<Formulario[] | null> {
        return this.formularios.filter(f => f.id_matricula === id_matricula && f.id_quizz === quizzId) || null;
    }
}
