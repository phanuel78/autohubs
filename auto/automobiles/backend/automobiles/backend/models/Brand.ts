import { Schema, model, Document } from 'mongoose';

interface IBrand extends Document {
  name: string;
  slug: string;
  logoUrl: string;
  description: string;
}

const brandSchema = new Schema<IBrand>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Brand = model<IBrand>('Brand', brandSchema);

export default Brand;