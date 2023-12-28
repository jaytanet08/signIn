import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
function ProtechtedRouter({ children }) {
    const { user } = useUserAuth();
    if (!user) {
  
        return <Navigate to="/" />
    }
    return children
}

export default ProtechtedRouter