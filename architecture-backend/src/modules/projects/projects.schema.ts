import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ timestamps: true })
export class Project extends Document {

  @Prop({ required: true })
  title!: string

  @Prop({ required: true })
  description!: string

  @Prop({ required: true })
  city!: string

  @Prop({ required: true })
  year!: number

  @Prop()
  imageUrl!: string
}

export const ProjectSchema = SchemaFactory.createForClass(Project)