import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PresentacionesService } from './presentaciones.service';
import { CreatePresentacionDto } from './dto/create-presentacion.dto';
import { UpdatePresentacionDto } from './dto/update-presentacion.dto';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class PresentacionesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly presentacionesService: PresentacionesService) {}

  @SubscribeMessage('crearPresentacion')
  async create(@MessageBody() createPresentacionDto: CreatePresentacionDto) {
    try {
      const presentacion = await this.presentacionesService.create(createPresentacionDto);
      const presentaciones = await this.presentacionesService.findAll();
      this.server.emit('presentacionCreada', { presentacion, presentaciones });
      return { success: true, data: presentacion };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('listarPresentaciones')
  async findAll() {
    try {
      const presentaciones = await this.presentacionesService.findAll();
      return { success: true, data: presentaciones };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('obtenerPresentacion')
  async findOne(@MessageBody() data: { id: number }) {
    try {
      const presentacion = await this.presentacionesService.findOne(data.id);
      return { success: true, data: presentacion };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('actualizarPresentacion')
  async update(@MessageBody() data: { id: number; updatePresentacionDto: UpdatePresentacionDto }) {
    try {
      const presentacion = await this.presentacionesService.update(data.id, data.updatePresentacionDto);
      const presentaciones = await this.presentacionesService.findAll();
      this.server.emit('presentacionActualizada', { presentacion, presentaciones });
      return { success: true, data: presentacion };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('eliminarPresentacion')
  async remove(@MessageBody() data: { id: number }) {
    try {
      await this.presentacionesService.remove(data.id);
      const presentaciones = await this.presentacionesService.findAll();
      this.server.emit('presentacionEliminada', { id: data.id, presentaciones });
      return { success: true, message: 'Presentación eliminada' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('presentacionesPorUsuario')
  async findByUsuario(@MessageBody() data: { usuarioId: number }) {
    try {
      const presentaciones = await this.presentacionesService.findByUsuario(data.usuarioId);
      return { success: true, data: presentaciones };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('presentacionesPorFecha')
  async findByFecha(@MessageBody() data: { fecha: string }) {
    try {
      const presentaciones = await this.presentacionesService.findByFecha(data.fecha);
      return { success: true, data: presentaciones };
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