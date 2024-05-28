import React, { useState } from "react";
//implicit casting...
interface TextProps {
  text: string;
}

export const Text: React.FC<TextProps> = (props) => {
  const { text } = props;
  const [value, setValue] = useState<number>(676);

  return (
    <div>
      <h4>{value}</h4>
      <button onClick={() => setValue(value + 1)}>{text}</button>
    </div>
  );
};
//explicit casting...
interface NumProps {
  name: string;
  price: number;
}

//custom interface
interface ArgProps {
  text: string;
}

export const Value: React.FC<ArgProps> = (props) => {
  const { text } = props;
  const [value, setValue] = useState<NumProps>({ name: "PSG", price: 90 });

  return (
    <div>
      <h4>{value.name}</h4>
      <p>{value.price}</p>
      <button onClick={() => setValue({ name: "YHN", price: 140 })}>
        {text}
      </button>
    </div>
  );
};

export default Text;
