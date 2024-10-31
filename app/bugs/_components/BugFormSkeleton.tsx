import { Box } from "@radix-ui/themes";
import React from "react";
import {Skeleton} from "@/app/components";

const BugFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton className="mb-2" height={'2rem'}/>
      <Skeleton height={"24rem"} />
      <Skeleton className="mt-9" width={"150px"} height={"2rem"}/>
    </Box>
  );
};

export default BugFormSkeleton;
