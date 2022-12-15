import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Transfer from '../pages/Transfer'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Transfer/>} />
    </Routes>
  )
}
