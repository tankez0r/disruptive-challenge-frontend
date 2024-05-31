import { useForm } from 'react-hook-form';

interface formProps {
    searchTerm: string
    searchType: string
}

const SearchBar = () => {
    const { register, handleSubmit } = useForm<formProps>({
        defaultValues: {
            searchType: 'title',
        },
    });

    const onSubmit = (data: formProps) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center p-4 space-x-4 bg-white rounded-md shadow-md">
            <input
                type="text"
                placeholder="Search..."
                {...register('searchTerm', { required: true })}
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <select {...register('searchType')} className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="title">Title</option>
                <option value="topic">Topic</option>
            </select>
            <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Search
            </button>
        </form>
    );
};

export default SearchBar;