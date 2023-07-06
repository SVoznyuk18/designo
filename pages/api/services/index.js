import {servicesDB} from '../data/servicesDB';

export default function handler(req, res) {
  res.status(200).json(servicesDB);
};