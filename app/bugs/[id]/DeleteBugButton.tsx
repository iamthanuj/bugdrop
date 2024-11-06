"use client"

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";

const DeleteBugButton = ({ bugId }: { bugId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <TrashIcon />
          Delete
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>Are you sure you want to delete this bug? This action cannot be undone!</AlertDialog.Description>
        <Flex className="mt-4" gap={"10px"}>
          <AlertDialog.Cancel>
            <Button color="gray" variant="soft">Close</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red">Confirm</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteBugButton;
