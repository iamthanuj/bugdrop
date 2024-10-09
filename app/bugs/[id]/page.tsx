import BugStatusBadge from "@/app/components/BugStatusBadge";
import prisma from "@/prisma/client";
import { Box, Card, Heading, TextArea } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({ params }: Props) => {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();

  return (
    <div>
      <Heading>{bug.title}</Heading>
      <BugStatusBadge status={bug.status} />
      <p>{bug.createdAt.toDateString()}</p>
      <Card><p>{bug.description}</p></Card>
      
    </div>
  );
};

export default BugDetailsPage;
