import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTodo } from "@/store/slice/todo.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const InputComponents = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() & 888888) + 100000,
      name: todo,
      isDone: false,
      createAt: new Date().toLocaleString(),
    };
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full  items-center space-x-2"
    >
      <Input
        onChange={handleChange}
        value={todo}
        type="text"
        placeholder="todo"
      />
      <Button className="h-14" type="submit">
        Add Task
      </Button>
    </form>
  );
};

export default InputComponents;
