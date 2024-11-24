import ProjectsList from '../ProjectsList/ProjectsList';
import style from './Projects.module.css'

const Projects = () => {
  return (
    <>
      <div>
        <h1>Future Projects!</h1>
        <p style={{marginBottom: 25}}>Projects featured today by our curators</p>

        <ProjectsList/>
      </div>
    </>
  );
};

export default Projects;
