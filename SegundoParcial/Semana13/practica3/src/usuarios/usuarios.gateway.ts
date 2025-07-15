import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class UsuariosGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly usuariosService: UsuariosService) {}

  @SubscribeMessage('crearUsuario')
  async create(@MessageBody() createUsuarioDto: CreateUsuarioDto) {
    try {
      console.log('Creando usuario:', createUsuarioDto);
      const usuario = await this.usuariosService.create(createUsuarioDto);
      console.log('Usuario creado:', usuario);
      const usuarios = await this.usuariosService.findAll();
      console.log('Lista actualizada:', usuarios);
      this.server.emit('usuarioCreado', { usuario, usuarios });
      return { success: true, data: usuario };
    } catch (error) {
      console.error('Error creando usuario:', error);
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('listarUsuarios')
  async findAll() {
    try {
      console.log('Listando usuarios...');
      const usuarios = await this.usuariosService.findAll();
      console.log('Usuarios encontrados:', usuarios);
      return { success: true, data: usuarios };
    } catch (error) {
      console.error('Error listando usuarios:', error);
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('obtenerUsuario')
  async findOne(@MessageBody() data: { id: number }) {
    try {
      const usuario = await this.usuariosService.findOne(data.id);
      return { success: true, data: usuario };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('actualizarUsuario')
  async update(@MessageBody() data: any) {
    try {
      const { id, ...updateData } = data;
      const usuario = await this.usuariosService.update(id, updateData);
      const usuarios = await this.usuariosService.findAll();
      this.server.emit('usuarioActualizado', { usuario, usuarios });
      return { success: true, data: usuario };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('eliminarUsuario')
  async remove(@MessageBody() data: { id: number }) {
    try {
      await this.usuariosService.remove(data.id);
      const usuarios = await this.usuariosService.findAll();
      this.server.emit('usuarioEliminado', { id: data.id, usuarios });
      return { success: true, message: 'Usuario eliminado' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('buscarPorCorreo')
  async findByCorreo(@MessageBody() data: { correo: string }) {
    try {
      const usuario = await this.usuariosService.findByCorreo(data.correo);
      return { success: true, data: usuario };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('usuariosPorRol')
  async findByRol(@MessageBody() data: { rol: string }) {
    try {
      const usuarios = await this.usuariosService.findByRol(data.rol);
      return { success: true, data: usuarios };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }
}