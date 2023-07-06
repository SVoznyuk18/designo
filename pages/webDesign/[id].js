export const getServerSideProps = async (context) => {
  const {query} = context;
  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PROD_HOST : process.env.DEV_HOST;

  const responseProject = await fetch(`${baseUrl}/api/webProjects/${query.id}`);
  const project = await responseProject.json();

  return {
    props: {project}
  }
}

const Project = ({project}) => {
  return (
    <h1>{project?.title}</h1>
  )
}

export default Project;