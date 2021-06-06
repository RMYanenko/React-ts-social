import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";

type DialogProps = {
  name: string;
  id?: string;
};

const Dialog = ({ name, id }: DialogProps) => {
  return (
    <li className={s.dialog + " " + s.active}>
      <NavLink to={"/dialog/" + id}>{name}</NavLink>
    </li>
  );
};

const Dialogs = (props: DialogProps) => {
  return (
    <div className={s.dialogs}>
      <h2 className={s.pageTitle}>Dialogs</h2>
      <div className={s.dialogsItems}>
        <ul>
          <Dialog name="Men" id="1" />
          <Dialog name="Denis" id="2" />
          <Dialog name="The Boys" id="3" />
          <Dialog name="Vlad"  id="3" />
        </ul>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello</div>
        <div className={s.message}>Everyone has one's own path.</div>
        <div className={s.message}>Love is my religion</div>
      </div>
    </div>
  );
};

export default Dialogs;
