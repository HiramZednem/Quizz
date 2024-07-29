export class Quizz {
    id_quizz: number; // Primary Key (PK)
    nombre: string;

    constructor(id_quizz: number, nombre: string) {
        this.id_quizz = id_quizz;
        this.nombre = nombre;
    }
}
