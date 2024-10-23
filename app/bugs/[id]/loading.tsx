import { Skeleton } from "@/app/components";
import { Blockquote, Card, Flex } from "@radix-ui/themes";

const BugDetailsLoading = () => {
  return (
    <div className="w-full flex-row justify-center max-w-xl">
      <Flex direction={"column"} gap={"2"}>
        <Skeleton width="300px" height="30px"/>
        <Blockquote size={"3"}>
          <Skeleton width="300px" height="15px"/>
          <Skeleton width="300px" height="15px"/>
        </Blockquote>
        <Card className="prose">
          <Skeleton  height="40px"/>
        </Card>
      </Flex>
    </div>
  );
};

export default BugDetailsLoading;
