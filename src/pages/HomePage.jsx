import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import HomePageContent from '../components/HomePageContent';

function HomePage() {
  // State donde almacena los post
  const [posts, setPosts] = useState([]);

  // Effect para traer los post
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts();

      if (!result.error) {
        const post = result.data.posts;
        if (Array.isArray(post)) {
          setPosts(post);
        } else {
          console.error("No hay publicaciones para mostrar");
        }
      } else {
        console.error("Error por nuvvvvvv", result.error);
      }
    };

    fetchPosts();
  }, []);

    // Proporciona las publicaciones al componente de contenido
    return <HomePageContent posts={posts} />;
}

export default HomePage;
