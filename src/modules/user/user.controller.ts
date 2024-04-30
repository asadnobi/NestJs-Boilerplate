import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { IUser } from 'src/modules/user/user.interface';
import { UserService } from 'src/modules/user/user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  // Get all user list
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    try {
      const data: IUser[] = await this.userService.findAll();
      res.status(HttpStatus.OK).json(data);
    } catch (error) {
      // throw new ForbiddenException()
    }
  }
}
