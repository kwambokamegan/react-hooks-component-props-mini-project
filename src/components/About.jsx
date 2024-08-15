import React from 'react';

function About({ image = 'https://via.placeholder.com/215', about, name }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>
        {name} <br /> {about}
      </p>
    </aside>
  );
}

export default About;