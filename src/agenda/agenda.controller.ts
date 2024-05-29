import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';

@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post()
  create(@Body() createAgendaDto: CreateAgendaDto) {
    return this.agendaService.create(createAgendaDto);
  }

  @Get()
  findAll() {
    return this.agendaService.findAll();
  }

  @Get(':Fecha')
  findFecha(@Param('Fecha') fecha: string) {
    return this.agendaService.findFecha(fecha);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgendaDto: UpdateAgendaDto) {
    return this.agendaService.update(+id, updateAgendaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendaService.remove(+id);
  }
}
