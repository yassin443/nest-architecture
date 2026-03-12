import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ProjectsModule } from './modules/projects/projects.module'
import { ServicesModule } from './modules/services/services.module'
import { ContactModule } from './modules/contact/contact.module'
import { AppointmentsModule } from './modules/appointments/appointments.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [
    // Charge le .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Connexion MongoDB
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),

    // Tes modules
    ProjectsModule,
    ServicesModule,
    ContactModule,
    AppointmentsModule,
    AuthModule,
  ],
})
export class AppModule {}