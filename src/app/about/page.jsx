import Image from "next/image";
import style from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.subtitle}>Lorem, ipsum.</h2>
        <h1 className={style.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quod est!
        </h1>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          impedit iusto ratione suscipit exercitationem in id, quidem, magnam
          amet voluptatum autem voluptas expedita aliquid consequuntur sint
          accusantium vel. Amet, deserunt!
        </p>

        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
      <div className={style.imgContainer}>
        <Image src="/about.png" alt="" fill className={style.aboutImg} />
      </div>
    </div>
  );
};

export default AboutPage;
