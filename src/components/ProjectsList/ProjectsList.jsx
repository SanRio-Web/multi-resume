import ProjectItem from '../ProjectItem/ProjectItem';
import style from './ProjectsList.module.css'


const ProjectsList = () => {
  return (
    <>
      <div className={style.projects__list}>
        <ProjectItem number={'1'}/>
        <ProjectItem number={'2'}/>
        <ProjectItem number={'3'}/>
        <ProjectItem number={'4'}/>
      </div>
    </>
  );
};

export default ProjectsList;
