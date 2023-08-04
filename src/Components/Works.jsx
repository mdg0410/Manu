import React from 'react';
import works from '../Logic/works';

export default function Works() {
  return (
    <div>
      {works.map((work) => (
        <div key={work.id}>
          <img src={work.src} alt={work.alt} />
          <div>
            <h3>{work.title}</h3>
            <ul>
              {work.skills.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
            <p>{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
