import { useNavigate } from 'react-router-dom'

interface ProjectProps {
  project: any
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { id, name, images, info, buttonColor } = project

  let navigate = useNavigate()

  const handleClick = (id: any) => navigate(`/project/${id}`)

  return (
    <div className='project w-full md:flex md:items-center md:gap-24'>
      <img
        className='peer/image w-full h-[250px] mb-6 object-cover object-top rounded-md md:h-[300px] md:cursor-pointer md:duration-500 md:hover:hover:shadow-xl md:hover:scale-105 md:max-w-[480px]'
        src={images?.show || '/images/Cover.png'}
        alt='Project Cover'
        onClick={() => handleClick(id)}
      />
      <div>
        <h3 className='peer/project-title mb-6 cursor-pointer' onClick={() => handleClick(id)}>
          {name || 'Project Name'}
        </h3>
        <p className='mb-6'>
          {info.shortDescription ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristiqfacilisis fringilla.'}
        </p>
        <button
          className={`group/project-button relative uppercase after:content-[' '] after:absolute after:-bottom-[4px] after:-left-[2px] after:h-[3px] after:w-[86%] after:md:hover:w-[86%] peer-hover/image:after:w-[86%] peer-hover/project-title:after:w-[86%] after:md:duration-500 after:md:w-[0%] md:cursor-pointer md:duration-500 after:rounded-md ${buttonColor}`}
          type='button'
          onClick={() => handleClick(id)}
        >
          Ver proyecto
          <i className='fas fa-arrow-right ml-2 group-hover/project-button:ml-3 md:duration-500' />
        </button>
      </div>
    </div>
  )
}

export default Project
