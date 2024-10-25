import { BugStatusBadge } from "@/app/components";
import { Bug } from "@prisma/client";
import { Heading, Blockquote, Card } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";

const BugDetails = ({bug}:{bug:Bug}) => {
  return (
    <>
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
    </>
  );
};

export default BugDetails;
