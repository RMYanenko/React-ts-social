import s from "./Dialogs.module.scss";
import DialogItem from './DilogItem/DilogItem';
import Message from './Message/Message';


interface DialogData {
  id: number;
  name: string;
}
interface MessageData {
  id: number;
  message: string;
}



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
