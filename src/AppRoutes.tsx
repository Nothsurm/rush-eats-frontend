import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout showHero><HomePage /></Layout>} />
            <Route path='/auth-callback' element={<AuthCallbackPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/user-profile' element={<Layout><UserProfilePage /></Layout>} />
            </Route>
            <Route path='*' element={<Navigate to='/'/>} /> {/* USER TYPES URL THAT DOESN'T EXIST */}
        </Routes>
    )
}

export default AppRoutes;