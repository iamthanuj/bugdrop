import prisma from '@/prisma/client'
import BugForm from '../../_components/BugForm'
import { notFound } from 'next/navigation'

interface Props{
  params:{id:string}
}

const BugEditPage = async({params}:Props) => {

  const bug =  await prisma.bug.findUnique({
    where:{
      id:parseInt(params.id)
    }
  })

  if(!bug) notFound();

  return (
    <div><BugForm bug={bug}/></div>
  )
}

export default BugEditPage