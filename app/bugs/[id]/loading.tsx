import { Flex, Blockquote, Card } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BugDetailsLoading = () => {
  return (
    <div className="w-full flex-row justify-center max-w-xl">
      <Flex direction={"column"} gap={"2"}>
        <Skeleton width="300px" height="30px"/>
        <Blockquote size={"3"}>
          <Skeleton width="300px" height="20px"/>
          <Skeleton width="300px" height="20px"/>
        </Blockquote>
        <Card className="prose">
          <Skeleton  height="40px"/>
        </Card>
      </Flex>
    </div>
  );
};

export default BugDetailsLoading;
