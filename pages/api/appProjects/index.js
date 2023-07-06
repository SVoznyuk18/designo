import {appProjetsDB} from '../data/appProjectsDB';

export default function handler(req, res) {
  res.status(200).json(appProjetsDB);
};