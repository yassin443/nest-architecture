import { Controller, UseGuards } from '@nestjs/common';
import { Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { Appointments } from './appointments.schema';
import { AppointmentsService } from './appointments.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('appointments')
export class AppointmentsController {

 constructor(private appointmentsService: AppointmentsService) {}

  @Get()
    @UseGuards(AuthGuard('auth0'))
  findAll() {
    return this.appointmentsService.findAll()
  }

  @Get(':id')
    @UseGuards(AuthGuard('auth0'))
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(id)
  }

  @Post()
  create(@Body() data: Partial<Appointments>) {
    return this.appointmentsService.create(data)
  }

  @Put(':id')
    @UseGuards(AuthGuard('auth0'))
  update(@Param('id') id: string, @Body() data: Partial<Appointments>) {
    return this.appointmentsService.update(id, data)
  }

  @Delete(':id')
    @UseGuards(AuthGuard('auth0'))
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(id)
  }












}
