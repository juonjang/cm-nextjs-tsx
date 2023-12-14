import React from 'react'
import Link from "next/link"

type Props = {children:React.ReactNode}

export default function ExamplesLayout({children}: Props) {
  return (
    <div>
      <Link href="/examples/dashboard">Dashboard |</Link>
      <Link href="/examples/aboutus">AboutUs |</Link>
        {children}
    </div>
  )
}