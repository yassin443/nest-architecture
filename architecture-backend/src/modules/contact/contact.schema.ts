
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ timestamps: true })
export class Contact extends Document { 

@Prop({ required: true })
name!: string

@Prop({ required: true })
email!: string                  

@Prop({ required: true })
message!: string    

@Prop ({ required: false })
phone!: string

@Prop ({required: true})
subject!: string    

// phone    → optionnel
// subject  → required
// message  → required





}
export const ContactSchema = SchemaFactory.createForClass(Contact)