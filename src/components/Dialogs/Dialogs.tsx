import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";

type DialogProps = {
  name: string;
  id?: string;
};

type MessageProps = {
  text: string;
};

const Dialog = ({ name, id }: DialogProps) => {
  return (
    <li className={s.dialog + " " + s.active}>
      <NavLink to={"/dialog/" + id}>{name}</NavLink>
    </li>
  );
};

const Message = ({ text }: MessageProps) => {
  return <div className={s.message}>{text}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <h2 className={s.pageTitle}>Dialogs</h2>
      <div className={s.dialogsItems}>
        <ul>
          <Dialog name="Men" id="1" />
          <Dialog name="Denis" id="2" />
          <Dialog name="The Boys" id="3" />
          <Dialog name="Vlad" id="3" />
        </ul>
      </div>
      <div className={s.messages}>
        <Message text="Hello World" />
        <Message text="Hello" />
        <Message text="Everyone has one's own path." />
        <Message text="Love is my religion." />
      </div>
    </div>
  );
};

export default Dialogs;
