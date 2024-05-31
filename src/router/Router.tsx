import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import ProtectedRoutes from './ProtectedRoutes';
import MainPage from '../pages/main/MainPage';



const RouterComponent = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<ProtectedRoutes><MainPage /></ProtectedRoutes>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;