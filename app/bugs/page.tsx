import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const BugsPage = () => {
  return (
    <div>
      <Button><Link href="/bugs/new">New Bug</Link></Button>
    </div>
  )
}

export default BugsPage