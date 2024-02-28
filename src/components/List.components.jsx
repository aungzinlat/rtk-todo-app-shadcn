import { useGetTodoQuery } from "@/store/services/endpoints/todo.endpoint";
import React from "react";
import ListCardComponents from "./ListCard.components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const ListComponents = ({ isLoading, data, handleRefetch }) => {
  return (
    <>
      {isLoading ? (
        <div className=" text-center">Loading...</div>
      ) : (
        <div className=" w-full rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className=" w-10 text-center h-4 p-2">#</TableHead>
                <TableHead>Lists</TableHead>
                <TableHead className="text-center w-40">
                  ( <span>{data.filter((todo) => todo.completed).length}</span>{" "}
                  /<span>{data?.length}</span> )
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length !== 0 ? (
                <>
                  {data.map((todo) => (
                    <ListCardComponents
                      key={todo.id}
                      data={todo}
                      handleRefetch={handleRefetch}
                    />
                  ))}
                </>
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className=" h-56 text-center">
                    There is no Todo List
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default ListComponents;
