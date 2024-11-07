"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import React, { useState } from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Spinner } from "@/app/components";

const DeleteBugButton = ({ bugId }: { bugId: number }) => {
  const router = useRouter();

  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteBug = async () => {
    try {
      setIsDeleting(true);
      await axios.delete("/api/bugs/" + bugId);
      router.push("/bugs/list");
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      setError(true);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" disabled={isDeleting}>
            <TrashIcon />
            Delete
            {isDeleting && <Spinner/>}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this bug? This action cannot be
            undone!
          </AlertDialog.Description>
          <Flex className="mt-4" gap={"10px"}>
            <AlertDialog.Cancel>
              <Button color="gray" variant="soft">
                Close
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={deleteBug}>
                Confirm
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This bug could not be deleted
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            onClick={() => {
              setError(false);
            }}
          >
            Ok
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteBugButton;
