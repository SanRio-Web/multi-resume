import ProjectItem from "../ProjectItem/ProjectItem";
import style from "./ProjectsList.module.css";

const ProjectsList = ({ projectsData }) => {
  const ProjectElements = projectsData.map((el) => (
    <ProjectItem key={el.id} data={el} />
  ));

  return (
    <>
      <div className={style.projects__list}>{ProjectElements}</div>
    </>
  );
};

export default ProjectsList;
