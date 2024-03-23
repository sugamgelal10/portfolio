import React from 'react'

const ProjectCard = ({img,no, title, desc}) => {
  return (
    <div className='mb-[16px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div>
                <img src={img} width={400} className='rounded-md'/>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='font-bold text-[28px]'>{no}</div>
                <div className='font-extrabold text-[28px]'>{title}</div>
                <div className='font-normal text-[16px] text-zinc-300'>{desc}</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard