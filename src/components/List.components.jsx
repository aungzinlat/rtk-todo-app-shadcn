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
  console.log(data);
  

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className=" w-full rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>List</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data ? (
                <>
                  {data.map((todo) => (
                    <ListCardComponents key={todo.id} data={todo} />
                  ))}
                </>
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center">
                    No results.
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
