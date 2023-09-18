import mongoose from 'mongoose';
import { CONSTANTS } from './constants';
import { consola } from 'consola';

const MONGO_URI = CONSTANTS.mongo.uri;

export const databaseConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    consola.success('MongoDB connected sucessfully');
  } catch (error) {
    consola.error('MongoDB connection has failed..', error);
  }
};