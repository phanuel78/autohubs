import { Schema, model } from 'mongoose';

const shortLinkSchema = new Schema({
  targetUrl: {
    type: String,
    required: true,
    unique: true,
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '1d', // Automatically delete after 1 day
  },
});

const ShortLink = model('ShortLink', shortLinkSchema);

export default ShortLink;