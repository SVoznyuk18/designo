import {webProjectsDB} from '../data/webProjectsDB';

export default function handler(req, res) {
  const {query} = req;

  const selectProject = webProjectsDB.find(project => project?.page === query?.id);

  res.status(200).json(selectProject);
};