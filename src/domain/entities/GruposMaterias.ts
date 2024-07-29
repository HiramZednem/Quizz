export class GruposMaterias {
    id_gm: number; // Primary Key (PK)
    nombre_materia: string;
    nombre_grupo: string;

    constructor(id_gm: number, nombre_materia: string, nombre_grupo: string) {
        this.id_gm = id_gm;
        this.nombre_materia = nombre_materia;
        this.nombre_grupo = nombre_grupo;
    }
}
