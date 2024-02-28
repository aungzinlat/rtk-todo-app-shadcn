import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
} from "@/store/services/endpoints/todo.endpoint";

const ListCardComponents = ({ data, handleRefetch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(data.title);
  const [deleteFun] = useDeleteTodoMutation();
  const [updateFun, { isLoading, isError, isSuccess }] = useEditTodoMutation();

  const handleDelete = async () => {
    await deleteFun(data.id);
    handleRefetch();
  };

  const handleSaveEdit = async () => {
    try {
      await updateFun({ id: data.id, title: updatedText });
      handleRefetch();
      setIsEditing(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleCheckboxChange = async (e) => {
    try {
      await updateFun({ id: data.id, completed: e.target.checked });
      handleRefetch();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {isEditing ? (
        <TableRow>
          <TableCell className=" w-10 h-4"></TableCell>
          <TableCell colSpan={2} className=" flex w-full">
            <Input
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
              onBlur={handleSaveEdit}
              autoFocus
              className=" h-7 rounded-sm"
              type="text"
            />
          </TableCell>
          <TableCell className="text-center">
            <Button className="w-10 h-7 px-7 mr-2" onClick={handleSaveEdit}>
              Save
            </Button>
            <Button
              className="w-10 h-7 px-7 bg-red-500"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </TableCell>
        </TableRow>
      ) : (
        <>
          <TableRow>
            <TableCell className="w-10">
              <Input
                className=" w-4 h-4 cursor-pointer"
                checked={data.completed}
                onChange={handleCheckboxChange}
                name="title"
                id="title"
                type="checkbox"
              />
            </TableCell>
            <TableCell className={`${data.completed && "line-through"}`}>
              <Label className="cursor-pointer" htmlFor="title">
                {data.title}
              </Label>
            </TableCell>

            <TableCell className=" w-40 text-center">
              <Button
                onClick={() => setIsEditing(true)}
                className="w-10 h-7 px-7 mr-2"
              >
                Edit
              </Button>
              <Button
                onClick={handleDelete}
                className="w-10 h-7 px-7 bg-red-500"
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </>
      )}
    </>
  );
};

export default ListCardComponents;
