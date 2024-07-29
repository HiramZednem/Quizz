import { Request, Response } from "express";
import { GetFormularioByAlumnoNombreUseCase } from "../../application/GetFormularioByAlumnoNombreUseCase";
import { GetFormularioByAlumnoIdMatriculaUseCase } from "../../application/GetFormularioByAlumnoIdMatriculaUseCase";

export class AlumnosController {

    constructor(
        private readonly getFormularioByAlumnoNombreUseCase: GetFormularioByAlumnoNombreUseCase,
        private readonly getFormularioByAlumnoIdMatriculaUseCase: GetFormularioByAlumnoIdMatriculaUseCase
    ) {}

    getFormulariosByAlumnoNombre = async (req: Request, res: Response) => {
        try {
            const { nombre, quizzId } = req.query;
            const formularios = await this.getFormularioByAlumnoNombreUseCase.execute(String(nombre), Number(quizzId));
            res.status(200).json(formularios);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    getFormulariosByAlumnoIdMatricula = async (req: Request, res: Response) => {
        try {
            const { id_matricula, quizzId } = req.query;
            const formularios = await this.getFormularioByAlumnoIdMatriculaUseCase.execute(Number(id_matricula), Number(quizzId));
            res.status(200).json(formularios);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
