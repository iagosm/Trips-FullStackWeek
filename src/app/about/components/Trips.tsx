'use client';
import { prisma } from "@/lib/prisma";
import React, { useState, useEffect } from 'react';



const Trips =  () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => setData(res))
  }, [])
  console.log({ data })
  return  (
    <div>{data.map((i:any) => <p key={i.id}>{i.title}</p>)}</div>
  )
}

export default Trips