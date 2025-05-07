import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const BlogPage = () => {
  const blogs = useLoaderData();
  const navigate = useNavigate();

  const categories = [
    'All',
    ...Array.from(new Set(blogs.map(blog => blog.category)))
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogs
      : blogs.filter(blog => blog.category === selectedCategory);

  const [featured, ...rest] = filteredBlogs;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">Our Blog</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full border-1 border-blue-700 transition ${
              selectedCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Blog (Top full-width row) */}
      {featured && (
        <div className="flex flex-col md:flex-row gap-6 mb-12 pb-8">
          <img
            src={featured.img}
            alt={featured.title}
            className="w-full md:w-1/2 h-72 object-cover rounded-xl shadow transition-all duration-500 ease-in-out hover:grayscale hover:scale-105"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-3 text-blue-800">{featured.title}</h2>
            <p className="text-gray-700 mb-4">{featured.summary}</p>
            <button
              onClick={() => navigate(`/blog/${featured.id}`)}
              className="cursor-pointer text-purple-700 font-medium hover:underline"
            >
              Read More →
            </button>
          </div>
        </div>
      )}

      {/* 3-Column Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border-2 border-blue-100 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="h-48 w-full object-cover rounded-md mb-4 transition-all duration-500 ease-in-out hover:grayscale hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{blog.title}</h3>
            <p className="text-gray-600 flex-grow">{blog.summary}</p>
            <button
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="mt-4 text-purple-600 hover:underline font-medium"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
