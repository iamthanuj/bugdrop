"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Callout, Text,  } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {createIssueSchema} from "@/app/validationSchemas"
import {z} from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";


const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});


type BugForm = z.infer<typeof createIssueSchema>

const NewBugPage = () => {
  const [errorShow, setErrorShow] = useState("");
  const router = useRouter();
  const { control, register, handleSubmit, formState:{ errors } } = useForm<BugForm>({
    resolver : zodResolver(createIssueSchema)
  });

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
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
        <Button>Submit New Bug</Button>
      </form>
    </div>
  );
};

export default NewBugPage;
