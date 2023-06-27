import {webProjects} from './data/webProjects';

export default function handler(req, res) {
  res.status(200).json(webProjects);
};