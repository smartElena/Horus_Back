import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { Agenda } from './entities/agenda.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
    console.log(fecha)
    const fechaConvertida = new Date(fecha);
    console.log(fechaConvertida)
    // fechaConvertida.setHours(0, 0, 0, 0);
    // fechaConvertida.toISOString();

    console.log(fechaConvertida)

    const agendaCita = await this.agendaRepositorio.find({ where: { Fecha: fechaConvertida } });
    // console.log(agendaCita)
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
