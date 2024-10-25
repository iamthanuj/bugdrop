import {BugStatusBadge} from "@/app/components"
import prisma from "@/prisma/client";
import { Blockquote, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({ params }: Props) => {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();


  return (
    <Grid columns={{initial:"1", md:"2"}} gap={"5"} >
      <Flex direction={"column"} gap={"2"}>
        <Heading>{bug.title}</Heading>
        <Blockquote size={"3"}>
          <p>Created Date:{bug.createdAt.toDateString()}</p>
          <p>
            Status: <BugStatusBadge status={bug.status} />
          </p>
        </Blockquote>
        <Card className="prose">
          <Markdown>{bug.description}</Markdown>
        </Card>
      </Flex>
      <Flex>
        <Button>
          <Pencil2Icon/>
          <Link href={`/bugs/${bug.id}/edit`}>Edit Bug</Link>
          </Button>
      </Flex>
    </Grid>
  );
};

export default BugDetailsPage;
