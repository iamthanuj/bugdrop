import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditBugButton from "./EditBugButton";
import BugDetails from "./BugDetails";
import DeleteBugButton from "./DeleteBugButton";

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({ params }: Props) => {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap={"5"}>
      <Flex className="md:col-span-4" direction={"column"} gap={"2"}>
        <BugDetails bug={bug} />
      </Flex>
      <Flex direction={"column"} gap={"10px"}>
        <EditBugButton bugId={bug.id} />
        <DeleteBugButton bugId={bug.id} />
      </Flex>
    </Grid>
  );
};

export default BugDetailsPage;
