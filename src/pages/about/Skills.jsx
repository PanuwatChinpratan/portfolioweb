import React from 'react'
import { skills } from '../../data'
const Skills = () => {
  return (
    <>
    {skills.map(({title,percentage},index)=>{
        return (
            <div className="progress__box" key={index}>
                <div className="progress__circle">{title}</div>
                <div className="brabra">{percentage}</div>
            </div>
        )
    })}
    </>
  )
}

export default Skills