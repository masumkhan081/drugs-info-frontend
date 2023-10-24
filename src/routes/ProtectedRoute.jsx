import React from 'react'

export default function ProtectedRoute({ children:any, pass:string }) {

    if (pass) {
        return <>{children}</>
    }
    else {
        return <p>not authorized </p>
    }
}
