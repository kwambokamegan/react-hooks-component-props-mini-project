import React from 'react';
import blogData from '../data/blog';
function Article() {
  const post = blogData.posts.map(
    ({ id, title, date = 'January 1, 1970', preview, minutes }) => {
      return (
        <article key={id}>
          <h3>{title}</h3>
          <small>
            {date}
            {'· ' + minutes + 'min read'}
          </small>
          <p>{preview}</p>
        </article>
      );
    }
  );
  return post;
}

export default Article;