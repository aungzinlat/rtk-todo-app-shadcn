import InputComponents from "@/components/Input.components";
import ListComponents from "@/components/List.components";
import ListCardComponents from "@/components/ListCard.components";
import { useGetTodoQuery } from "@/store/services/endpoints/todo.endpoint";
import React from "react";

const HomePage = () => {
  const { isLoading, isError, data, isSuccess, refetch } = useGetTodoQuery();

  const handleRefetch = () => {
    refetch();
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" max-w-lg w-full min-h-[400px] flex flex-col gap-5">
        <div>
          <h1 className=" text-4xl font-bold mb-4">Todo App</h1>
        </div>
        <InputComponents handleRefetch={handleRefetch} />
        <ListComponents
          isLoading={isLoading}
          data={data}
          handleRefetch={handleRefetch}
        />
      </div>
    </div>
  );
};

export default HomePage;
