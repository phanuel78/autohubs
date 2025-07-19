import { Schema, model, Document } from 'mongoose';

interface IMessage extends Document {
  productId: string;
  userId: string;
  adminId: string;
  content: string;
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>({
  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  adminId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = model<IMessage>('Message', messageSchema);

export default Message;