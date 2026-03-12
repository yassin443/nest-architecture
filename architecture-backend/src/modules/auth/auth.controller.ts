import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {

  @Get('login')
  @UseGuards(AuthGuard('auth0'))
  login() {}

  @Get('callback')
  @UseGuards(AuthGuard('auth0'))
  callback(@Req() req: any, @Res() res: any) {
    res.redirect('http://localhost:3000/auth/profile')
  }

  @Get('profile')
  @UseGuards(AuthGuard('auth0'))
  profile(@Req() req: any) {
    return req.user
  }

  @Get('logout')
  logout(@Res() res: any) {
    res.redirect(
      `https://${process.env.AUTH0_DOMAIN}/v2/logout?returnTo=http://localhost:3000`
    )
  }
}