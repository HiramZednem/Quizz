export class Alumnos {
    id_matricula: number; // Primary Key (PK)
    email: string;
    nombre: string;

    constructor(id_matricula: number, email: string, nombre: string) {
        this.id_matricula = id_matricula;
        this.email = email;
        this.nombre = nombre;
    }
}
