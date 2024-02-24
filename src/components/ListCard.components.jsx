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

const ListCardComponents = () => {
  return (
    <div>
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
            <TableRow>
              <TableCell className="w-10">
                <Input className=" w-4 h-4" type="checkbox" />
              </TableCell>
              <TableCell>Learn 1</TableCell>
              <TableCell className=" w-40 text-center">
                <Button className="w-10 h-7 px-7 mr-2">Edit</Button>
                <Button className="w-10 h-7 px-7 bg-red-500">Delete</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-10">
                <Input className=" w-4 h-4" type="checkbox" />
              </TableCell>
              <TableCell>Learn 1</TableCell>
              <TableCell className="w-40 text-center">
                <Button className="w-10 h-7 px-7 mr-2">Edit</Button>
                <Button className="w-10 h-7 px-7 bg-red-500">Delete</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-10">
                <Input className=" w-4 h-4" type="checkbox" />
              </TableCell>
              <TableCell>Learn 1</TableCell>
              <TableCell className=" w-40 text-center">
                <Button className="w-10 h-7 px-7 mr-2">Edit</Button>
                <Button className="w-10 h-7 px-7 bg-red-500">Delete</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ListCardComponents;
