import React from 'react';
import social from '../Logic/social';

export default function aboutMySelf() {
  return (
    <div>
      <div>
        <h3>Hi, I`m Jhonatan</h3>
        <p>
          I`m a web developer, I`m currently studying at the University of Buenos Aires,
          I`m in the last year of the career. I am a person who likes to learn new things
          and I am always looking for new challenges.
        </p>
        <div>
          <a href="/"><span>LET`S CONNECT</span></a>
          <ul>
            {social.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img src={item.icon} alt={item.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <span className="text-skill">Languages</span>
          <button type="button">open</button>
        </li>
        <li>
          <span className="text-skill">Skills</span>
          <button type="button">open</button>
        </li>
      </ul>
    </div>
  );
}
