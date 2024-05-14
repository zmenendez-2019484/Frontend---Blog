
import React from 'react';

function HomePageContent({ posts }) {


  return (
    <div>
      <h2>Aquí se listan las publicaciones</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id} onClick={() => handlePostClick(post._id)}>
            <h3>{post.title}</h3>
            <p>{post.content}...</p>
            <a href={post.url}>Ver más</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePageContent;
