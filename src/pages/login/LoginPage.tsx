import LoginForm from './components/LoginForm';
import { storage } from '../../config/store/storage';

const LoginPage = () => {
    return (
        <div>
            <LoginForm store={storage()} />
        </div>
    )
}

export default LoginPage