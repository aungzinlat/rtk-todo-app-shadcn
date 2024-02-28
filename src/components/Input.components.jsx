import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostTodoMutation } from "@/store/services/endpoints/todo.endpoint";
import { useState } from "react";

const InputComponents = ({ handleRefetch }) => {
  const [todo, setTodo] = useState("");
  const [fun, data] = usePostTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo !== "") {
      await fun({
        title: todo,
      });
      handleRefetch();
      setTodo("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full  items-center space-x-2"
    >
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        name="title"
        placeholder=""
      />
      <Button className="h-14" type="submit">
        Add Task
      </Button>
    </form>
  );
};

export default InputComponents;
