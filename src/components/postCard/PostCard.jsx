import Image from "next/image";
import style from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.imgContainer}>
            <Image
              src="https://placehold.co/200x300"
              alt=""
              className={style.img}
              fill
            />
          </div>
          <span className={style.date}>01.01.2024</span>
        </div>

        <div className={style.bottom}>
          <h1 className={style.title}>Lorem, ipsum.</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            sit id fugit numquam aliquam, assumenda modi deleniti quibusdam
            possimus deserunt nulla debitis eos, earum ipsa ex vel totam labore
            consequatur!
          </p>
          <Link className={style.link} href="/blog/post">
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostCard;
