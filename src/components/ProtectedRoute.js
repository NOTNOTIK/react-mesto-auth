import { Navigate } from "react-router";


export default function ProtectedRoute({ element: Component, ...props }) {
    
    return (props.loggedIn ? <Component {...props} /> : <Navigate to="/main" replace />)
}