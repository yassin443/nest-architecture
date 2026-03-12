import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointments, AppointmentSchema } from './appointments.schema';
@Module({
  imports: [
      MongooseModule.forFeature([
        { name: Appointments.name, schema: AppointmentSchema }
      ])
    ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService]
})
export class AppointmentsModule {}
