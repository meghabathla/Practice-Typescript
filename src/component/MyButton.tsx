import React from "react";
interface MyButtonProps {
  text: string | boolean | number;
  onClick?: () => void;
}

type props = {
  text: number;
};

const MyButton: React.FC<MyButtonProps> = (props) => {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
};

export const NewButton: React.FC<props> = (props) => {
  return <button>{props.text}</button>;
};

export default MyButton;
