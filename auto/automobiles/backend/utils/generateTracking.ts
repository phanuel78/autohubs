import { v4 as uuidv4 } from 'uuid';

export const generateTrackingNumber = (): string => {
    return uuidv4();
};