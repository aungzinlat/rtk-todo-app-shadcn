import React from "react";
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

const ListCardComponents = ({ data }) => {
  console.log(data);
  return (
    <>
      <TableRow>
        <TableCell className="w-10">
          <Input className=" w-4 h-4" type="checkbox" />
        </TableCell>
        <TableCell>{data.title}</TableCell>
        <TableCell className=" w-40 text-center">
          <Button className="w-10 h-7 px-7 mr-2">Edit</Button>
          <Button className="w-10 h-7 px-7 bg-red-500">Delete</Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ListCardComponents;
