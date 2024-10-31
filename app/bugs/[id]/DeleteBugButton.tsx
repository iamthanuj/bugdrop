import { Button } from '@radix-ui/themes'
import React from 'react'
import {TrashIcon} from "@radix-ui/react-icons"

const DeleteBugButton = ({bugId}:{bugId:number}) => {
  return (
    <Button color='red'><TrashIcon/>Delete</Button>
  )
}

export default DeleteBugButton