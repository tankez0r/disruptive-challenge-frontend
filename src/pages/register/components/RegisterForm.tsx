import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUseCase } from '../../../core/use-cases';
import { localHostAdapter } from '../../../config/adapters/http';

interface formFields {
    username: string,
    email: string,
    password: string
    role: string
}

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formFields>();
    const navigate = useNavigate()

    const onSubmit = (data: formFields) => {
        console.log(data);
        registerUseCase(localHostAdapter, data)
        navigate('/')
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            {...register('username', { required: 'Username is required' })}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.username && (
                            <p className="mt-2 text-sm text-red-600">{errors.username.message as string}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">{errors.email.message as string}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-600">{errors.password.message as string}</p>
                        )}
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-gray-700">Role</span>
                        <div className="mt-2 space-y-4">
                            <div className="flex items-center">
                                <input
                                    id="creator"
                                    type="radio"
                                    value="creador"
                                    {...register('role', { required: 'role es requerido' })}
                                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                />
                                <label htmlFor="creator" className="block ml-3 text-sm font-medium text-gray-700">
                                    Creador
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="reader"
                                    type="radio"
                                    value="lector"
                                    {...register('role', { required: 'Role is required' })}
                                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                />
                                <label htmlFor="reader" className="block ml-3 text-sm font-medium text-gray-700">
                                    Lector
                                </label>
                            </div>
                        </div>
                        {errors.role && (
                            <p className="mt-2 text-sm text-red-600">{errors.role.message as string}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;