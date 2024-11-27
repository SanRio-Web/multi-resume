import style from "./ProjectItem.module.css";
import { NavLink } from "react-router";

const ProjectItem = ({ data }) => {
  return (
    <>
      <div className={style.projects__item}>
        <NavLink to={`/projects/${data.id}`}>
          Project {data.id} - {data.title}
        </NavLink>
      </div>
    </>
  );
};

export default ProjectItem;
