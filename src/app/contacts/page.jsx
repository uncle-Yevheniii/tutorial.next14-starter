import Image from "next/image";
import style from "./contacts.module.css";

const ContactsPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src="/contact.png" alt="" fill className={style.img} />
      </div>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone number (Optional)" />
          <textarea
            name=""
            id=""
            rows="10"
            cols="30"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactsPage;
