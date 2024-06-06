import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { Agenda } from './entities/agenda.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as moment from 'moment';

@Injectable()
export class AgendaService {

  constructor(@InjectRepository(Agenda) private readonly agendaRepositorio: Repository<Agenda>) { }

  async create(createAgendaDto: CreateAgendaDto) {
    return 'This action adds a new agenda';
  }

  async findAll(): Promise<Agenda[]> {
    return await this.agendaRepositorio.find();
  }

  async findFecha(fecha: string) {
    const fechaMoment = moment(fecha);
    console.log({ fechaMoment })

    // Obtener la fecha en formato UTC
    const fechaUTC = fechaMoment.utc();
    console.log({ fechaUTC })
    console.log({ todate: fechaUTC.toDate() })

    const agendaCita = await this.agendaRepositorio.find({ where: { Fecha: fechaUTC.toDate() } });
    if (!agendaCita) {
      throw new NotFoundException('No se encontró la cita');
    }
    return agendaCita;
  }

  async update(id: number, updateAgendaDto: UpdateAgendaDto) {
    return `This action updates a #${id} agenda`;
  }

  async remove(id: number) {
    return `This action removes a #${id} agenda`;
  }
}
