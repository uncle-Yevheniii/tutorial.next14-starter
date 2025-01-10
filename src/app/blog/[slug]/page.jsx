import style from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <Image
            src="https://placehold.co/200x300"
            alt=""
            className={style.img}
            fill
          />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.title}>Lorem, ipsum.</h1>

          <div className={style.detail}>
            <Image
              src="https://placehold.co/200x300"
              alt=""
              className={style.avatar}
              width={50}
              height={50}
            />
            <div className={style.detailText}>
              <span className={style.detailTitle}>Author</span>
              <span className={style.detailValue}>Lorem, ipsum.</span>
            </div>

            <div className={style.detailText}>
              <span className={style.detailTitle}>Published</span>
              <span className={style.detailValue}>01.01.2024</span>
            </div>
          </div>

          <div className={style.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            sit id fugit numquam aliquam, assumenda modi deleniti quibusdam
            possimus deserunt nulla debitis eos, earum ipsa ex vel totam labore
            consequatur!
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
