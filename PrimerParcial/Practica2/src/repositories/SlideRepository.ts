import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Slide } from "../entities/Slide";

export class SlideRepository {
  private repository: Repository<Slide>;
  
  constructor() {
    this.repository = AppDataSource.getRepository(Slide);
  }

  async findAll(): Promise<Slide[]> {
    return this.repository.find({
      relations: ["presentacion"]
    });
  }

  async findById(id: number): Promise<Slide | null> {
    return this.repository.findOne({
      where: { id },
      relations: ["presentacion"]
    });
  }
  
  async findByPresentacion(presentacionId: number): Promise<Slide[]> {
    return this.repository.find({
      where: { presentacion: { id: presentacionId } },
      order: { numero: "ASC" }
    });
  }

  async create(data: Partial<Slide>): Promise<Slide> {
    const slide = this.repository.create(data);
    return this.repository.save(slide);
  }

  async update(id: number, data: Partial<Slide>): Promise<Slide | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return !!result.affected;
  }
}