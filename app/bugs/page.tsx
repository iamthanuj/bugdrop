import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";

const BugsPage = async () => {
  const bugs = await prisma.bug.findMany();

  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="/bugs/new">New Bug</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bugs.map((bug) => (
            <Table.Row key={bug.id}>
              <Table.Cell>{bug.title}</Table.Cell>
              <Table.Cell>{bug.status}</Table.Cell>
              <Table.Cell>{bug.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default BugsPage;
