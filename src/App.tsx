import "./App.css";
import Counter from "./component/Counter";
import Form from "./component/Form";
import MyButton, { NewButton } from "./component/MyButton";
import { Text, Value } from "./component/Text";

import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <NewButton text={45678} />
      <MyButton onClick={() => alert("it is working")} text="hello " />
      <Text text="click here" />
      <Value text="click to check value" />
      <Form />
      <Counter />
    </CounterProvider>
  );
}

export default App;
