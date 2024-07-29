import { IAlumnosRepository } from "../domain/repositorys/IAlumnosRepository";
import { Formulario } from "../domain/entities/Formulario";

export class GetFormularioByAlumnoIdMatriculaUseCase {
    constructor(private readonly alumnosRepository: IAlumnosRepository) {}

    async execute(id_matricula: number, quizzId: number): Promise<Formulario[] | null> {
        try {
            const formularios = await this.alumnosRepository.getFormularioByAlumnoIdMatricula(id_matricula, quizzId);
            return formularios;
        } catch (error) {
            console.error("Error obteniendo formularios por ID de matrícula de alumno:", error);
            throw error;
        }
    }
}
