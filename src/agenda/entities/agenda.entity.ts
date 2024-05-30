import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Agenda'})
export class Agenda {

    @PrimaryGeneratedColumn()
    IdAgenda: number;

    @Column({ type: 'datetime' })
    Fecha: Date;

    @Column({ type: 'nvarchar', length: 50, nullable: false })
    Nombre: string;

    @Column({ type: 'nvarchar', length: 50 })
    Hora: string;

    @Column({ type: 'nvarchar', length: 50 })
    Identificación: string;

    @Column({ type: 'nvarchar', length: 255 })
    TipoCompromiso: string;

    @Column({ type: 'nvarchar', length: 50 })
    Teléfono: string;

    @Column({ type: 'nvarchar', length: 50 })
    Correo: string;

    @Column({ type: 'nvarchar', length: 50 })
    Entidad: string;

    @Column({ type: 'nvarchar', length: 50, nullable: false })
    Duración: string;

    @Column({ type: 'nvarchar', length: 100 })
    Observaciones: string;

    @Column({ type: 'nvarchar', length: 50 })
    Estado: string;

    @Column({ type: 'datetime' })
    FechaAsignación: Date;

}
