export class Formulario {
    id_formulario: number; // Primary Key (PK)
    calificacion: number; // float
    id_matricula: number; // Foreign Key (FK) referencing Alumnos
    id_quizz: number; // Foreign Key (FK) referencing Quizz

    constructor(id_formulario: number, calificacion: number, id_matricula: number, id_quizz: number) {
        this.id_formulario = id_formulario;
        this.calificacion = calificacion;
        this.id_matricula = id_matricula;
        this.id_quizz = id_quizz;
    }
}
