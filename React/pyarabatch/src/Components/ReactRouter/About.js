import React from 'react'
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About's Page</h1>
      <Outlet/>
    </div>
  )
}
