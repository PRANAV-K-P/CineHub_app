import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header'
import Home from '../pages/Home'

const UserRoutes = () => {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default UserRoutes