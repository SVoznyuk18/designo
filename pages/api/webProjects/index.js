import {webProjectsDB} from '../data/webProjectsDB';

export default function handler(req, res) {
  res.status(200).json(webProjectsDB);
};