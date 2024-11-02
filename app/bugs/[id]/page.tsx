import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
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
    <Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
      <Flex direction={"column"} gap={"2"}>
        <BugDetails bug={bug} />
      </Flex>
      <Flex gap={"5rem"}>
        <EditBugButton bugId={bug.id} />
        <DeleteBugButton bugId={bug.id} />
      </Flex>
    </Grid>
  );
};

export default BugDetailsPage;
