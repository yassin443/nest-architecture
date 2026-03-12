import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Project } from './projects.schema'

@Injectable()
export class ProjectsService {

  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<Project>
  ) {}

  findAll(): Promise<Project[]> {
    return this.projectModel.find().exec()
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.projectModel.findById(id).exec()
    if (!project) throw new NotFoundException('Projet non trouvé')
    return project
  }

  create(data: Partial<Project>): Promise<Project> {
    const project = new this.projectModel(data)
    return project.save()
  }

  async update(id: string, data: Partial<Project>): Promise<Project> {
    const project = await this.projectModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec()
    if (!project) throw new NotFoundException('Projet non trouvé')
    return project
  }

  async remove(id: string): Promise<void> {
    await this.projectModel.findByIdAndDelete(id).exec()
  }
}