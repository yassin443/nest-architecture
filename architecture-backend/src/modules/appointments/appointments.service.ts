import { Injectable, NotFoundException } from '@nestjs/common';
import { Appointments } from './appointments.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class AppointmentsService {

 constructor(
    @InjectModel(Appointments.name)
    private appointmentModel: Model<Appointments>
  ) {}


  findAll(): Promise<Appointments[]> {
    return this.appointmentModel.find().exec()
  }

  async findOne(id: string): Promise<Appointments> {
    const RDV = await this.appointmentModel.findById(id).exec()
    if (!RDV) throw new NotFoundException('Rendez vous non trouvé')
    return RDV
  }

  create(data: Partial<Appointments>): Promise<Appointments> {
    const RDV = new this.appointmentModel(data)
    return RDV.save()
  }

  async update(id: string, data: Partial<Appointments>): Promise<Appointments> {
    const RDV = await this.appointmentModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec()
    if (!RDV) throw new NotFoundException('Rendez vous non trouvé')
    return RDV
  }

  async remove(id: string): Promise<void> {
    await this.appointmentModel.findByIdAndDelete(id).exec()
  }













// findAll()         ← récupère tous les RDV depuis la DB
// findOne(id)       ← récupère un seul RDV par son id
// create(data)      ← crée un nouveau RDV dans la DB
// updateStatus(id)  ← change le status (pending/confirmed/cancelled)
// remove(id)        ← supprime un RDV




















}
