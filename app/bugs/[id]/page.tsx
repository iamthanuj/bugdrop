import {BugStatusBadge} from "@/app/components"
import prisma from "@/prisma/client";
import { Blockquote, Card, Flex, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({ params }: Props) => {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();


  return (
    <div className="w-full flex-row justify-center">
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
    </div>
  );
};

export default BugDetailsPage;
