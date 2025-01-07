import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>Logo</div>
      <div className={style.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
};

export default Footer;
