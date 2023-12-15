import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/examples/dashboard'>Dashboard</Link>
    </div>
  )
}