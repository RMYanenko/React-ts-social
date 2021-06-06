import s from "./../Dialogs.module.scss";

type MessageProps = {
  text: string;
};

const Message = ({ text }: MessageProps) => {
  return <div className={s.message}>{text}</div>;
};

export default Message;
