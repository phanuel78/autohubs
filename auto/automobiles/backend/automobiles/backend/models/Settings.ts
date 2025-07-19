import { Schema, model } from 'mongoose';

interface Settings {
  paymentUrlTemplate: string;
}

const settingsSchema = new Schema<Settings>({
  paymentUrlTemplate: {
    type: String,
    required: true,
  },
});

const SettingsModel = model<Settings>('Settings', settingsSchema);

export default SettingsModel;