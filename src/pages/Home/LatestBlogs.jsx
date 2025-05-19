import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Failed to load blogs:', err));
  }, []);

  const latestBlogs = blogs.slice(3, 6);

  return (
    <div id='blog' className="py-12 lg:py-26 px-6 md:px-12">
      <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-12">Latest Blog Posts</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover transition-all duration-500 ease-in-out hover:grayscale hover:scale-105" />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-sm text-blue-700 font-medium uppercase">{blog.category}</span>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">{blog.title}</h3>
                <p className="text-gray-600 text-md mt-2">{blog.content.slice(0,230)}</p>
              </div>
              <Link
                to={`/blog/${blog.id}`}
                className="mt-4 inline-block text-blue-700 font-semibold hover:text-purple-700 hover:underline"
              >
                Read More ...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
