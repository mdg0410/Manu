import React from 'react';
import social from '../Logic/social';

export default function Headline() {
  return (
    <section>
      <div>
        <div>
          <h1>Headline</h1>
          <p>text</p>
        </div>
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
    </section>
  );
}
