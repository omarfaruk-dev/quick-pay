import React from 'react';
import { TbArrowBackUpDouble } from 'react-icons/tb';
import { useParams, useLoaderData, useNavigate, Link } from 'react-router';

const BlogDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const blogs = useLoaderData();
    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) {
        return (
            <div className="max-w-4xl mx-auto py-10 px-4 text-center text-red-500">
                Blog not found.
            </div>
        );
    }
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <title>{blog.title}</title>
            <button onClick={handleGoBack} className='cursor-pointer flex items-center gap-2 text-xl rounded-3xl border-2 border-blue-700 px-4 py-1 mb-5 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:bg-gradient-to-l hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 text-white'><TbArrowBackUpDouble /> Go Back</button>
            <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-100 object-cover rounded-xl mb-8"
            />
            <p className="text-sm text-purple-600 font-medium uppercase mb-2">{blog.category}</p>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">{blog.title}</h1>
            <p className="text-gray-700 leading-7 whitespace-pre-line">{blog.content}</p>
            <div className='flex items-center justify-center mt-10'>
                <Link to='/blog'>
                    <button className=' cursor-pointer flex items-center gap-2 text-xl rounded-3xl border-2 border-blue-700 px-4 py-1 mb-5 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:bg-gradient-to-l hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 text-white'> View All Post</button>
                </Link>
            </div>
        </div>
    );
};

export default BlogDetails;
