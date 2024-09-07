import { Form } from "./Form";
import { List } from "./List";
import { Sum } from "./Sum";

export const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      <Form />
      <List handValueChange={handValueChange}/>
      <Sum />
    </div>
  );
};