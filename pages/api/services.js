import {servicesDB} from './data/servivesDB';

export default function handler(req, res) {
  res.status(200).json(servicesDB);
};