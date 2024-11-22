import Project from '../Project/Project';
import style from './Projects.module.css'


const Projects = () => {
  return (
    <>
      <div className={style.projects__list}>
        <Project number={'1'}/>
        <Project number={'2'}/>
        <Project number={'3'}/>
        <Project number={'4'}/>
      </div>
    </>
  );
};

export default Projects;
