import React from "react";
import { Table } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import BugStatusBadge from "../components/BugStatusBadge";
import BugActionBtn from "./BugActionBtn";
import Link from "../components/Link";

const BugsPage = async () => {
  const bugs = await prisma.bug.findMany();

  return (
    <div>
      <BugActionBtn/>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bugs.map((bug) => (
            <Table.Row key={bug.id}>
              <Table.Cell>
                <Link href={`/bugs/${bug.id}`}>
                {bug.title}
                </Link>
                <div className="md:hidden">
                  <BugStatusBadge status={bug.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <BugStatusBadge status={bug.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {bug.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default BugsPage;
