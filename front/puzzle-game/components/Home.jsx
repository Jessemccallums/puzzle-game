import React from 'react'
import Link from 'next/link'

export default function Init() {
  return (
    <div>
        <h1>
            Home
        </h1>
        <Link href="/levels" >levels</Link>
    </div>
  )
}
