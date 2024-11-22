import style from './Project.module.css'


const Project = ({number}) => {
  return (
    <>
      <div className={style.projects__item}>Project - {number}</div>
    </>
  );
};

export default Project;
