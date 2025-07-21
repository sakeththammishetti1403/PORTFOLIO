import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(p => (
          <div
            className="project-box"
            key={p.id}
            onClick={() => setOpenId(p.id)}
            tabIndex={0}
            style={{cursor: 'pointer'}}
            aria-label={`Open details for ${p.title}`}
          >
            <div className="project-image">
              <img src={p.image} alt={`${p.title} Screenshot`} />
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>
                {p.short} <span className="see-details">[see details]</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {projects.map(p => (
        <ProjectModal
          key={p.id}
          open={openId === p.id}
          onClose={() => setOpenId(null)}
          project={p}
        />
      ))}
    </section>
  );
}
