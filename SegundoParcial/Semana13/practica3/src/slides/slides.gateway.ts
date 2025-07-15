import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SlidesService } from './slides.service';
import { CreateSlideDto } from './dto/create-slide.dto';
import { UpdateSlideDto } from './dto/update-slide.dto';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class SlidesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly slidesService: SlidesService) {}

  @SubscribeMessage('crearSlide')
  async create(@MessageBody() createSlideDto: CreateSlideDto) {
    try {
      const slide = await this.slidesService.create(createSlideDto);
      const slides = await this.slidesService.findAll();
      this.server.emit('slideCreado', { slide, slides });
      return { success: true, data: slide };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('listarSlides')
  async findAll() {
    try {
      const slides = await this.slidesService.findAll();
      return { success: true, data: slides };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('obtenerSlide')
  async findOne(@MessageBody() data: { id: number }) {
    try {
      const slide = await this.slidesService.findOne(data.id);
      return { success: true, data: slide };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('actualizarSlide')
  async update(@MessageBody() data: { id: number; updateSlideDto: UpdateSlideDto }) {
    try {
      const slide = await this.slidesService.update(data.id, data.updateSlideDto);
      const slides = await this.slidesService.findAll();
      this.server.emit('slideActualizado', { slide, slides });
      return { success: true, data: slide };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('eliminarSlide')
  async remove(@MessageBody() data: { id: number }) {
    try {
      await this.slidesService.remove(data.id);
      const slides = await this.slidesService.findAll();
      this.server.emit('slideEliminado', { id: data.id, slides });
      return { success: true, message: 'Slide eliminado' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('slidesPorPresentacion')
  async findByPresentacion(@MessageBody() data: { presentacionId: number }) {
    try {
      const slides = await this.slidesService.findByPresentacion(data.presentacionId);
      return { success: true, data: slides };
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