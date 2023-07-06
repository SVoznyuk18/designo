import {graphicProjectsDB} from '../data/graphicProjectsDB';

export default function handler(req, res) {
  const {query} = req;

  const selectProject = graphicProjectsDB.find(project => project?.page === query?.id);

  res.status(200).json(selectProject);
};