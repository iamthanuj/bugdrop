'use client';

import React from 'react'
import dynamic from 'next/dynamic';
import {useForm, Controller} from "react-hook-form"
import { TextField, Button } from '@radix-ui/themes'
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});


interface BugForm{
  title:string,
  description: string,
}

const NewBugPage = () => {

  const router = useRouter();
  const { control,register, handleSubmit } = useForm<BugForm>();

  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit( async (data)=>{
       await axios.post('/api/bugs', data)
       router.push('/bugs')
    })}>
        <TextField.Root variant="classic" placeholder="Title"  {...register('title')} />
        <Controller
        name='description' 
        control={control}
        render={({field})=> <SimpleMDE placeholder='Description' {...field}/>}
        />
        <Button>Submit New Bug</Button>
    </form>
  )
}

export default NewBugPage