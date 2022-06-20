import React from 'react';

const About = () => {
  const hero = {
    fname: 'mr x',
    powerStrength: 200,
  };
  const abaility = {
    ...hero,
    sword: 'long arms',
  };
  console.log(abaility);
  return (
    <section className="section about-section">
      <h1 className="section-title">About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
    </section>
  );
};

export default About;
