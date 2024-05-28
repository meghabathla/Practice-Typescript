import "./App.css";
import Form from "./component/Form";
import MyButton, { NewButton } from "./component/MyButton";
import { Text, Value } from "./component/Text";

function App() {
  return (
    <>
      <NewButton text={45678} />
      <MyButton onClick={() => alert("it is working")} text="hello " />
      <Text text="click here" />
      <Value text="click to check value" />
      <Form />
    </>
  );
}

export default App;
