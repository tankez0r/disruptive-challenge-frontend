import { Navigate } from 'react-router-dom';
import { storage } from '../config/store/storage';
import { ReactNode } from 'react';

interface props {
    children: ReactNode | ReactNode[]
}
const ProtectedRoutes = ({ children }: props) => {
    const { token } = storage()



    return (
        <>
            {token ? children : <Navigate to={"/login"} />}
            {console.log(token)}
        </>
    )
}

export default ProtectedRoutes