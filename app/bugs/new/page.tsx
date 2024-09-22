import React from 'react'
import { TextField, TextArea, Button } from '@radix-ui/themes'

const NewBugPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root variant="classic" placeholder="Enter Bug title" />
        <TextArea placeholder="Description" />
        <Button>Submit New Bug</Button>
    </div>
  )
}

export default NewBugPage