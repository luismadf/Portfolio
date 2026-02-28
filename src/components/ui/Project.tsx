import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Project as ProjectType } from 'types'

interface ProjectProps {
  project: ProjectType
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { id, name, images, buttonColor, stack, translationKey } = project
  const { t } = useTranslation()

  const navigate = useNavigate()
  const handleClick = (id: number) => navigate(`/project/${id}`)

  return (
    <div className='project w-full md:flex md:items-center md:gap-24'>
      <img
        className='peer/image w-full h-[250px] mb-6 object-cover object-top rounded-md md:h-[300px] md:cursor-pointer md:duration-500 md:hover:hover:shadow-xl md:hover:scale-105 md:max-w-[480px]'
        src={images?.show || '/images/Cover.png'}
        alt={`${name} project screenshot`}
        onClick={() => handleClick(id)}
      />
      <div>
        <h3 className='peer/project-title text-2xl md:text-3xl font-bold tracking-tight mb-4 cursor-pointer hover:text-primary transition-colors' onClick={() => handleClick(id)}>
          {name}
        </h3>
        <p className='text-muted dark:text-gray-300 text-lg leading-relaxed mb-6'>{t(`projects.${translationKey}.shortDescription`)}</p>
        {stack && (
          <div className='flex flex-wrap gap-2 mb-8'>
            {stack.map((tech) => (
              <span
                key={tech}
                className='px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md border border-slate-200 bg-surface/50 text-muted dark:border-slate-700 dark:bg-dark-surface dark:text-gray-400'
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <button
          className={`group/project-button relative font-bold uppercase tracking-widest text-sm after:content-[' '] after:absolute after:-bottom-[6px] after:-left-[2px] after:h-[3px] after:w-[86%] md:hover:after:w-[86%] peer-hover/image:after:w-[86%] peer-hover/project-title:after:w-[86%] md:after:duration-500 md:after:w-[0%] md:cursor-pointer md:duration-500 after:rounded-md after:bg-primary transition-colors hover:text-primary`}
          type='button'
          onClick={() => handleClick(id)}
        >
          {t('home.viewProject')}
          <i className='fas fa-arrow-right ml-2 group-hover/project-button:ml-3 md:duration-500' />
        </button>
      </div>
    </div>
  )
}

export default Project
