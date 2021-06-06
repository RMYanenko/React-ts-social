import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.scss";

type DialogProps = {
    name: string;
    id: number;
  };
  
const DialogItem = ({ name, id }: DialogProps) => {
    return (
      <li className={s.dialog + " " + s.active}>
        <NavLink to={"/dialog/" + id}>{name}</NavLink>
      </li>
    );
  };

  export default DialogItem;