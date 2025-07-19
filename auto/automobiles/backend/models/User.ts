import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'client';
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'client'],
    default: 'client',
  },
}, {
  timestamps: true,
});

const User = model<IUser>('User', userSchema);

export default User;