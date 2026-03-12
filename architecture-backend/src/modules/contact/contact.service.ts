import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './contact.schema';
@Injectable()
export class ContactService {
constructor(
    @InjectModel(Contact.name)
    private contactModel: Model<Contact>
) {}

findAll(): Promise<Contact[]> {
    return this.contactModel.find().exec()
}

create(data: Partial<Contact>): Promise<Contact> {
    const contact = new this.contactModel(data)
    return contact.save()
}
async remove(id: string): Promise<void> {
    await this.contactModel.findByIdAndDelete(id).exec()
}



    //  constructor(
//     @InjectModel(Project.name)
//     private projectModel: Model<Project>
//   ) {}

//   findAll(): Promise<Project[]> {
//     return this.projectModel.find().exec()
//   }









}
