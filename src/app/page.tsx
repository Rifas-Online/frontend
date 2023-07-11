import React from 'react'
import { cookies } from 'next/headers'

type Props = {}

const page = (props: Props) => {

  const hasTookenCookie = cookies().getAll()
  console.log(hasTookenCookie) 
  return (
    <>
      home
    </>
  )
}

export default page