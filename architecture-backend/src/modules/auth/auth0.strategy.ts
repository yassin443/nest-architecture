import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-auth0'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy, 'auth0') {

  constructor(configService: ConfigService) {
    super({
      domain: configService.get('AUTH0_DOMAIN') as string,
      clientID: configService.get('AUTH0_CLIENT_ID') as string,
      clientSecret: configService.get('AUTH0_CLIENT_SECRET') as string,
      callbackURL: configService.get('AUTH0_CALLBACK_URL') as string,
      state: false,        // ← ajoute ça
    })
  }

  validate(accessToken: string, refreshToken: string, extraParams: any, profile: any) {
    return profile
  }
}