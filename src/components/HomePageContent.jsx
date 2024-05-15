// HomePageContent.jsx
import React from 'react';


function HomePageContent({ posts }) {


  return (
    <div>
      <h2>Proyectos realizados</h2>
      <ul>
        {posts.map((post) => (
          <li className="card" key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}...</p>
            <a href={post.url}>Ver repositorio</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePageContent;
