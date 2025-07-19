import { Schema, model, Document } from 'mongoose';

interface IReport extends Document {
  userId: string;
  productId: string;
  issueDescription: string;
  createdAt: Date;
}

const reportSchema = new Schema<IReport>({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  issueDescription: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Report = model<IReport>('Report', reportSchema);

export default Report;