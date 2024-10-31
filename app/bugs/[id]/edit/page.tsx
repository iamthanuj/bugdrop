import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import BugFormSkeleton from './loading'

const BugForm = dynamic(
  ()=> import ("@/app/bugs/_components/BugForm"),
  {
    ssr:false,
    loading: ()=> <BugFormSkeleton/>

  }
)


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