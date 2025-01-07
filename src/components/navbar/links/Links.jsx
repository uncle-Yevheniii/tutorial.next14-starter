import NavLink from "./navLink/navLink";
import style from "./links.module.css";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <>
      <div className={style.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
      </div>
    </>
  );
};

export default Links;
