import React from 'react'
import SkillsCard from './SkillsCard'
import Title from '../layouts/Title'
import html from '../../assets/photos/html.png'
import css from '../../assets/photos/css.png'
import javascript from '../../assets/photos/javascript.png'
import react from '../../assets/photos/react.png'
import tailwind from '../../assets/photos/tailwind.png'
import typescript from '../../assets/photos/typescript.svg'
import scss from '../../assets/photos/sass.svg'
import redux from '../../assets/photos/redux.svg'
import git from '../../assets/photos/git.svg'
import bootstrap from '../../assets/photos/bootstrap.svg'
import material_ui from '../../assets/photos/material_ui.svg'
import devExtreme from '../../assets/photos/devExtreme.svg'

function Skills() {
  return (
    <section
      id='skills'
      className='w-full py-10 border-b-[1px] border-b-black'>
      <div className="flex justify-center items-center text-center">
        <Title
          des={
            <span>
              My <span className='text-designColor'>Technical</span> Skills
            </span>}
        />
      </div>
      <div className='w-[90%] m-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-14'>
        <SkillsCard
          name={'HTML'}
          src={html}
        />
        <SkillsCard
          name={'CSS'}
          src={css}
        />
        <SkillsCard
          name={'JAVASCRIPT'}
          src={javascript}
        />
        <SkillsCard
          name={'SCSS'}
          src={scss}
        />
        <SkillsCard
          name={'TYPESCRIPT'}
          src={typescript}
        />
        <SkillsCard
          name={'REACT'}
          src={react}
        />
        <SkillsCard
          name={'REDUX'}
          src={redux}
        />
        <SkillsCard
          name={'TAILWIND'}
          src={tailwind}
        />
        <SkillsCard
          name={'BOOTSTRAP'}
          src={bootstrap}
        />
        <SkillsCard
          name={'MATERIAL UI'}
          src={material_ui}
        />
        <SkillsCard
          name={'DEVEXTREME'}
          src={devExtreme}
        />
        <SkillsCard
          name={'GIT'}
          src={git}
        />
      </div>

    </section>
  )
}

export default Skills;