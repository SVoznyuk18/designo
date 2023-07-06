import {appProjetsDB} from '../data/appProjectsDB';

export default function handler(req, res) {
  const {query} = req;

  const selectProject = appProjetsDB.find(project => project?.page === query?.id);

  res.status(200).json(selectProject);
};