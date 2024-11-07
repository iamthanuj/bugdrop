import { bugSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import delay from "delay";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = bugSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const foundBug = await prisma.bug.findUnique({
    where:{
        id:parseInt(params.id)
    }
  })

  if(!foundBug){
    return NextResponse.json({error:'Invalide Bug'}, {status:404})
  }

  const updatedBug =  await prisma.bug.update({
    where:{id: foundBug.id},
    data: {
        title:body.title,
        description:body.description
    }
  })

  return NextResponse.json(updatedBug)
}


export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
){

  const bug =  await prisma.bug.findUnique({
    where:{
        id:parseInt(params.id)
    }
  })

  if(!bug){
    return NextResponse.json({error:'Invalide bug'}, {status:404})
  }

  await prisma.bug.delete({
    where:{id:bug.id}
  })

  return NextResponse.json({})
}