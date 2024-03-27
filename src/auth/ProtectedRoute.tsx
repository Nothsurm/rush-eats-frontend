import { useAuth0 } from "@auth0/auth0-react"
import { Navigate, Outlet } from "react-router-dom"


export default function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuth0()

    if (isLoading) {
      return (
        <div className="flex justify-center min-h-screen items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-opacity-50"></div>
        </div>
      )
    }

    if (isAuthenticated) {
      return <Outlet />
    }

    return <Navigate to='/' replace />
}
