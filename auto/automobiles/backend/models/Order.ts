import { Schema, model, Document } from 'mongoose';

interface TrackingCoord {
  lat: number;
  lng: number;
  timestamp: Date;
}

interface Order extends Document {
  userId: string;
  cartItems: { productId: string; quantity: number }[];
  shippingInfo: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  trackingCoords: TrackingCoord[];
  confirmedAt?: Date;
  trackingNumber?: string;
}

const trackingCoordSchema = new Schema<TrackingCoord>({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const orderSchema = new Schema<Order>({
  userId: { type: String, required: true },
  cartItems: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  shippingInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  status: { type: String, enum: ['pending', 'confirmed', 'shipped', 'delivered'], default: 'pending' },
  trackingCoords: [trackingCoordSchema],
  confirmedAt: { type: Date },
  trackingNumber: { type: String },
});

const OrderModel = model<Order>('Order', orderSchema);

export default OrderModel;