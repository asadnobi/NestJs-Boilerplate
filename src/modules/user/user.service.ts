import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/modules/user/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  public async findAll(): Promise<IUser[]> {
    const userList: IUser[] = await this.userModel.find().exec();
    return userList;
  }
}
