import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import BugStatusBadge from "../components/BugStatusBadge";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BugActionBtn from "./BugActionBtn";

const LoadingBugsPage = () => {
  const bugs = [1, 2, 3, 4, 5];

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
            <Table.Row key={bug}>
              <Table.Cell>
                <Skeleton />
                <div className="md:hidden">
                  <Skeleton />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default LoadingBugsPage;
