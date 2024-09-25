"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Callout,  } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";


const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface BugForm {
  title: string;
  description: string;
}

const NewBugPage = () => {
  const [errorShow, setErrorShow] = useState("");
  const router = useRouter();
  const { control, register, handleSubmit } = useForm<BugForm>();

  return (
    <div className="max-w-xl space-y-3">
      {errorShow && (
        <Callout.Root color="red">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            {errorShow}
          </Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/bugs", data);
            router.push("/bugs");
          } catch (error) {
            console.log(error);
            setErrorShow("An unexpected error occured");
          }
        })}
      >
        <TextField.Root
          variant="classic"
          placeholder="Title"
          {...register("title")}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit New Bug</Button>
      </form>
    </div>
  );
};

export default NewBugPage;
