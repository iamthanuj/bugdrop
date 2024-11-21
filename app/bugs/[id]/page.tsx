import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditBugButton from "./EditBugButton";
import BugDetails from "./BugDetails";
import DeleteBugButton from "./DeleteBugButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({ params }: Props) => {

  const session =  await getServerSession(authOptions)

  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap={"5"}>
      <Flex className="md:col-span-4" direction={"column"} gap={"2"}>
        <BugDetails bug={bug} />
      </Flex>
      {session && (<Flex direction={"column"} gap={"10px"}>
        <EditBugButton bugId={bug.id} />
        <DeleteBugButton bugId={bug.id} />
      </Flex>)}
    </Grid>
  );
};

export default BugDetailsPage;
