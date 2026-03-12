import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact } from './contact.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from './contact.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
          { name: Contact.name, schema: ContactSchema }
        ])
      ],
  controllers: [ContactController],
  providers: [ContactService]
})
export class ContactModule {}
