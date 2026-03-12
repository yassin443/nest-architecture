import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ProjectsService } from './projects.service'
import { Project } from './projects.schema'

@Controller('projects')
export class ProjectsController {

  constructor(private projectsService: ProjectsService) {}

  // ✅ PUBLIC — tout le monde peut voir
  @Get()
  findAll() {
    return this.projectsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id)
  }

  // 🔒 ADMIN seulement
  @Post()
  @UseGuards(AuthGuard('auth0'))
  create(@Body() data: Partial<Project>) {
    return this.projectsService.create(data)
  }

  @Put(':id')
  @UseGuards(AuthGuard('auth0'))
  update(@Param('id') id: string, @Body() data: Partial<Project>) {
    return this.projectsService.update(id, data)
  }

  @Delete(':id')
  @UseGuards(AuthGuard('auth0'))
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id)
  }
}
