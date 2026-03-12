import { Body, Controller, Get, Post, Delete, UseGuards, Param } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ContactService } from './contact.service'
import { Contact } from './contact.schema'

@Controller('contact')
export class ContactController {

  constructor(private contactService: ContactService) {}

  @Get()
  @UseGuards(AuthGuard('auth0'))
  findAll() {
    return this.contactService.findAll()
  }

  @Post()
  create(@Body() data: Partial<Contact>) {
    return this.contactService.create(data)
  }

  @Delete(':id')
  @UseGuards(AuthGuard('auth0'))
  remove(@Param('id') id: string) {
    return this.contactService.remove(id)
  }
}