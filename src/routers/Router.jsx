import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Transfer from '../pages/Transfer'
import Home from '../pages/Home'
import Register from '../pages/Register'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/transfer" element={<Transfer/>} />

        <Route path="/register" element={<Register/>} />
    </Routes>
  )
}
