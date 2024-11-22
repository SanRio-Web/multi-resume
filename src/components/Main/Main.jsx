import Projects from '../Projects/Projects';
import style from './Main.module.css'

const Main = () => {
  return (
    <>
      <div className={style.content}>
        <h1>Future Projects!</h1>
        <p style={{marginBottom: 25}}>Projects featured today by our curators</p>

        <Projects/>
      </div>
    </>
  );
};

export default Main;
