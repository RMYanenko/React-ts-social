import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";

type DialogProps = {
  name: string;
  id: number;
};

type MessageProps = {
  text: string;
};

interface DialogData {
  id: number;
  name: string;
}
interface MessageData {
  id: number;
  message: string;
}

const DialogItem = ({ name, id }: DialogProps) => {
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
  let dialogData: DialogData[] = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Denis" },
    { id: 3, name: "The Boys" },
    { id: 4, name: "Vlad" },
  ];
  let messageData: MessageData[] = [
    { id: 1, message: "Hello World" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Everyone has one's own path." },
    { id: 4, message: "Love is my religion." },
  ];

  let dialogsElement = dialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = messageData.map((m) => <Message text={m.message} />);

  return (
    <div className={s.dialogs}>
      <h2 className={s.pageTitle}>Dialogs</h2>
      <div className={s.dialogsItems}>
        <ul>
          {dialogsElement}
        </ul>
      </div>
      <div className={s.messages}>
        { messagesElement}
      </div>
    </div>
  );
};

export default Dialogs;
