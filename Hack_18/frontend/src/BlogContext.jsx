// BlogContext.js
import axios from 'axios';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a new context
const BlogContext = createContext();

// Custom hook to consume the blog context
export const useBlogContext = () => useContext(BlogContext);

// Blog provider component
export const BlogProvider = ({ children }) => {
  const [allBlogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    try { 
      const response = await axios.get('http://localhost:8080/');
      setBlogs(response.data);
      // console.log(allBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  }
  useEffect(()=>{
    fetchBlogs();
  },[])
  // console.log('adjsjfsdf');
  // console.log(allBlogs);

  return (
    <BlogContext.Provider value={{ allBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};
