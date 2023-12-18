'use client'
import { initialize } from 'next/dist/server/lib/render-server';
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

export default function AuthProvider({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const part = usePathname();

useEffect(()=>{
   initialize()
})

const initialize = () => {
  if (part == "/") {
    router.push('/stock');
    return null;
  }
}
  
  return <div>{children}</div>
}