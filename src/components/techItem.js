import React from 'react'

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Delte</button>
    </li>


  )
}

export default TechItem;