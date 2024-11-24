import style from './ProjectItem.module.css'


const ProjectItem = ({number}) => {
  return (
    <>
      <div className={style.projects__item}>Project - {number}</div>
    </>
  );
};

export default ProjectItem;
