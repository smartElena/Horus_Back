import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Usuario) private readonly usuarioRepositorio: Repository<Usuario>,
    private jwtService: JwtService,
  ) { }

  async login(loginDto: LoginDto): Promise<any> {
    const { usuario, clave } = loginDto;

    const query = `
      SELECT Nombre, TipoUsuario, IdUsuario
      FROM Usuario
      WHERE Usuario = '${usuario}' AND PWDCOMPARE('${clave}', Clave) = 1
    `;

    try {
      const usuarioEncontrado = await this.usuarioRepositorio.query(query);

      const data = {
        Nombre: usuarioEncontrado[0].Nombre,
        TipoUsuario: usuarioEncontrado[0].TipoUsuario,
        IdUsuario: usuarioEncontrado[0].IdUsuario,
      };

      return {
        access_token: await this.jwtService.sign(data),
      };
    } catch (error) {
      console.log(error)
      throw new UnauthorizedException('Usuario no encontrado');
    }

  }
}
