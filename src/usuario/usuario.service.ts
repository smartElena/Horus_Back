import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(@InjectRepository(Usuario) private readonly usuarioRepositorio: Repository<Usuario>) { }

  async findOne(username: string) {
    return await this.usuarioRepositorio.find({ where: { Usuario: username } });
  }

}
