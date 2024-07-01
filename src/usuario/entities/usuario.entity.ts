import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Usuario' })
export class Usuario {


    @PrimaryGeneratedColumn()
    IdUsuario: string;

    @Column({ type: 'nvarchar', length: 50 })
    IdMédico: string;

    @Column({ type: 'nvarchar', length: 50 })
    Usuario: string;

    @Column({ type: 'nvarchar', length: 50 })
    Clave: string;

    @Column({ type: 'nvarchar', length: 50 })
    Nombre: string;

    @Column({ type: 'nvarchar', length: 50 })
    Médico: string;

    @Column({ type: 'int', })
    TipoUsuario: number


}
