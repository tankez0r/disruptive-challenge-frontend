import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { localHostAdapter } from '../../../config/adapters/http';
import { loginUseCase } from '../../../core/use-cases/login.use-case';
import { Istore } from '../../../config/store/storage';
import { useEffect } from 'react';

interface formValues {
    email: string,
    password: string
}
interface componentProps {
    store: Istore
}

const LoginForm = ({ store }: componentProps) => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, setError } = useForm<formValues>({ defaultValues: { email: "", password: "" } });
    const navigate = useNavigate();
    const { setToken, token } = store
    const onSubmit = async (data: formValues) => {
        setToken(await loginUseCase(localHostAdapter, data, setError))
    };

    useEffect(() => {

        if (errors.password) return
        if (isSubmitSuccessful) {
            navigate('/')
        }

    }, [token, isSubmitSuccessful, errors, navigate])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', { required: 'Email es necesario' })}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">{errors.email.message as string}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', { required: 'Se necesita contraseña' })}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-600">{errors.password.message as string}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-sm text-center text-gray-600">
                    Necesitas una cuenta?{' '}
                    <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Registrar
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;