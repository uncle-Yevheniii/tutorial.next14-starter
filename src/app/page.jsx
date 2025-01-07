import Image from "next/image";
import style from "./home.module.css";

const HomePage = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Lorem, ipsum dolor.</h1>
        <p className={style.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          assumenda consectetur officia quaerat! Harum, dicta.
        </p>
        <div className={style.buttons}>
          <button className={style.button}>Lorem, ipsum.</button>
          <button className={style.button}>Lorem.</button>
        </div>
        <div className={style.brands}>
          <Image src="/brands.png" alt="" fill className={style.brandImg} />
        </div>
      </div>
      <div className={style.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={style.heroImg} />
      </div>
    </div>
  );
};

export default HomePage;
