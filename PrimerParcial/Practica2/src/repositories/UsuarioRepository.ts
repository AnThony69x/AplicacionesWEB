import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/Usuario";

export class UsuarioRepository {
  private repository: Repository<Usuario>;
  
  constructor() {
    this.repository = AppDataSource.getRepository(Usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Usuario | null> {
    return this.repository.findOne({ 
      where: { id },
      relations: ["presentaciones", "calificacionesRealizadas"]
    });
  }
  
  async findDocentes(): Promise<Usuario[]> {
    return this.repository.find({
      where: { tipo: "docente" }
    });
  }
  
  async findEstudiantes(): Promise<Usuario[]> {
    return this.repository.find({
      where: { tipo: "estudiante" }
    });
  }

  async create(data: Partial<Usuario>): Promise<Usuario> {
    const usuario = this.repository.create(data);
    return this.repository.save(usuario);
  }

  async update(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return !!result.affected;
  }
}