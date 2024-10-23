"use client";

import { ErrorMessage, Spinner } from "@/app/components";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import NewBugLoadingPage from "./loading";


const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => <NewBugLoadingPage/>
});

type BugForm = z.infer<typeof createIssueSchema>

const NewBugPage = () => {
  const [errorShow, setErrorShow] = useState("");
  const [isSubmitting,setIsSubmitting] = useState(false)
  const router = useRouter();
  const { control, register, handleSubmit, formState:{ errors } } = useForm<BugForm>({
    resolver : zodResolver(createIssueSchema)
  });

  const onSubmit= handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/bugs", data);
      router.push("/bugs");
    } catch (error) {
      setIsSubmitting(false);
      setErrorShow("An unexpected error occured");
    }
  })

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
        onSubmit={onSubmit}
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
        <Button disabled={isSubmitting} >Submit New Bug{isSubmitting && <Spinner/>}</Button>
      </form>
    </div>
  );
};

export default NewBugPage;
