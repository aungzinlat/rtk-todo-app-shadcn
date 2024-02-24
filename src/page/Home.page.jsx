import InputComponents from "@/components/Input.components";
import ListCardComponents from "@/components/ListCard.components";
import React from "react";

const HomePage = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" max-w-lg w-full flex flex-col gap-5">
        <InputComponents />
        <ListCardComponents />
      </div>
    </div>
  );
};

export default HomePage;
