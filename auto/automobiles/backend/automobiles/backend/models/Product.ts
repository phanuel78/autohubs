import { ObjectId } from 'mongoose';

export interface Product {
  brandId: ObjectId;
  name: string;
  slug: string;
  images: { url: string; alt: string }[];
  description: string;
  price: number;
}

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema<Product>({
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Brand',
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;