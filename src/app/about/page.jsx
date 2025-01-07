import Image from "next/image";
import style from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={style.imgContainer}>
        <Image src="/about.png" fill />
      </div>
    </div>
  );
};

export default AboutPage;
