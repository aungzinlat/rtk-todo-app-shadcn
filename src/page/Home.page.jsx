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
      <div className=" max-w-lg w-full flex flex-col gap-5">
        <InputComponents handleRefetch={handleRefetch} />
        <ListComponents isLoading={isLoading} data={data} />
      </div>
    </div>
  );
};

export default HomePage;
