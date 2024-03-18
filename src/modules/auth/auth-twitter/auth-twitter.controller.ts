import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthTwitterService } from './auth-twitter.service';
import { AuthService } from '../auth/auth.service';

@ApiTags('Auth')
@Controller({
  path: 'auth/twitter',
  version: '1',
})
export class AuthTwitterController {
  constructor(
    private readonly authService: AuthService,
    private readonly authTwitterService: AuthTwitterService,
  ) {}

  // @Post('login')
  // @HttpCode(HttpStatus.OK)
  // async login(
  //   @Body() loginDto: AuthTwitterLoginDto,
  // ): Promise<LoginResponseType> {
  //   const socialData = await this.authTwitterService.getProfileByToken(
  //     loginDto,
  //   );

  //   return this.authService.validateSocialLogin('twitter', socialData);
  // }
}