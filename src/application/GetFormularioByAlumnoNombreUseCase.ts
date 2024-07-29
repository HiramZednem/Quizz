import { IAlumnosRepository } from "../domain/repositorys/IAlumnosRepository";
import { Formulario } from "../domain/entities/Formulario";

export class GetFormularioByAlumnoNombreUseCase {
    constructor(private readonly alumnosRepository: IAlumnosRepository) {}

    async execute(nombre: string, quizzId: number): Promise<Formulario[] | null> {
        try {
            const formularios = await this.alumnosRepository.getFormularioByAlumnoNombre(nombre, quizzId);
            return formularios;
        } catch (error) {
            console.error("Error obteniendo formularios por nombre de alumno:", error);
            throw error;
        }
    }
}
