import React from 'react';

export default function ProjectModal({open, onClose, project}) {
  if (!open) return null;
  return (
    <div className="project-modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h3>{project.title}</h3>
        <p><strong>Abstract:</strong> {project.abstract}</p>
        <ul>
          <li><strong>Technologies:</strong> {project.technologies}</li>
          <li><strong>Role:</strong> {project.role}</li>
        </ul>
      </div>
    </div>
  );
}
