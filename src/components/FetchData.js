import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const FetchData = () => {
  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });
   const [posts, setPosts] = useState([]);

   // GET with Axios
   useEffect(() => {
      const fetchPost = async () => {
         let response = await client.get('?_limit=10');
         setPosts(response.data);
      };
      fetchPost();
   }, []);

  return { posts };
};
