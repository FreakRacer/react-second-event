import { useState } from "react";
function TodoForm({ addText }) {
  const [userInput, setUserInput] = useState("");

  const holder = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addText(userInput);
    setUserInput("");
  };

  return (
    <form>
      
      <input
        type="text"
        placeholder="add task..."
        value={userInput}
        onChange={holder}
      />
      <button onClick={onSubmit}>+</button>
    </form>
  );
}
export default TodoForm;
