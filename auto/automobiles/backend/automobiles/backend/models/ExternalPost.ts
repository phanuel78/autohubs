import { Schema, model, Document } from 'mongoose';

interface ExternalPost extends Document {
  title: string;
  url: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const externalPostSchema = new Schema<ExternalPost>({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const ExternalPostModel = model<ExternalPost>('ExternalPost', externalPostSchema);

export default ExternalPostModel;