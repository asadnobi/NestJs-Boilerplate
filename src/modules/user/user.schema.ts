import mongoose from 'mongoose';
import { IUser } from 'src/modules/user/user.interface';

export const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  phone: String,
  email: String,
});
