"use client"
import React from 'react'
import { TextField, Button } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewBugPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root variant="classic" placeholder="Enter Bug title" />
        <SimpleMDE />
        <Button>Submit New Bug</Button>
    </div>
  )
}

export default NewBugPage