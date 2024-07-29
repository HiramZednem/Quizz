import { createPool, Pool, PoolOptions } from "mysql2";

export class Pooler{
    poolConfig: PoolOptions = {
        host: "localhost",
        user: "root",
        password: "root",
        port: 3306,
        database: "quizz_database"
    };
    
    //Ahora esta variable importala en rutas
    pool: Pool = createPool(this.poolConfig);
};
