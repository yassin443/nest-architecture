import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ timestamps: true })
export class Appointments extends Document {

  @Prop({ required: true })
  clientName!: string

  @Prop({ required: true })
  clientEmail!: string

  @Prop({ required: true })
  clientPhone!: string        // ← string pas number

  @Prop()
  message!: string            // ← pas required, optionnel

  @Prop({ required: true })
  date!: string               // ← string pas Date

  @Prop({ required: true })
  time!: string               // ← string pas Date

  @Prop({ default: 'pending' })
  status!: string             // ← default pending
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointments)
//             ↑ AppointmentSchema pas ProjectSchema