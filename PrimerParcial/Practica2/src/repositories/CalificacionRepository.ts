import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Calificacion } from "../entities/Calificacion";

export class CalificacionRepository {
  private repository: Repository<Calificacion>;
  
  constructor() {
    this.repository = AppDataSource.getRepository(Calificacion);
  }

  async findAll(): Promise<Calificacion[]> {
    return this.repository.find({
      relations: ["presentacion", "docente"]
    });
  }

  async findById(id: number): Promise<Calificacion | null> {
    return this.repository.findOne({
      where: { id },
      relations: ["presentacion", "docente"]
    });
  }
  
  async findByPresentacion(presentacionId: number): Promise<Calificacion[]> {
    return this.repository.find({
      where: { presentacion: { id: presentacionId } },
      relations: ["docente"]
    });
  }

  async create(data: Partial<Calificacion>): Promise<Calificacion> {
    const calificacion = this.repository.create(data);
    return this.repository.save(calificacion);
  }

  async update(id: number, data: Partial<Calificacion>): Promise<Calificacion | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return !!result.affected;
  }
}