import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

@Module({
    imports: [ConfigModule.forRoot()],
})
export class DataSourceConfigModule { }

const servicioConfiguracion = new ConfigService();

export const AppDataSource = new DataSource({
    type: 'mssql',
    host: servicioConfiguracion.get<string>('DB_HOST'),
    port: +servicioConfiguracion.get<number>('DB_PORT'),
    username: servicioConfiguracion.get<string>('DB_USERNAME'),
    password: servicioConfiguracion.get<string>('DB_PASSWORD'),
    database: servicioConfiguracion.get<string>('DB_DATABASE'),
    synchronize: false,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    options: { encrypt: false },
});