import { useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProjectById } from 'utils'
import { SEO, PageTransition } from 'components'

const Project: React.FC = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const project = getProjectById(id)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const { name, images, stack, code, live, translationKey } = project
  const description = t(`projects.${translationKey}.description`)

  return (
    <PageTransition>
      <div className='container mx-auto my-12'>
        <SEO title={`${name} - Luis de Freites`} description={description} image={images?.desktop} />
        <div className='mb-12 md:flex md:gap-6'>
          <div className='md:w-2/4'>
            <h1 className='text-2xl font-bold mb-6'>{name}</h1>

            <p className='mb-6'>{description}</p>

            <div className='grid grid-cols-3 mb-6'>
              {stack && (
                <ul>
                  <li className='font-bold uppercase mb-3'>{t('project.stack')}</li>
                  {stack.map((data) => (
                    <li key={data} className='mb-1 uppercase'>
                      {data}
                    </li>
                  ))}
                </ul>
              )}
              {code && (
                <ul>
                  <li className='font-bold uppercase mb-3'>{t('project.code')}</li>
                  <li>
                    <a
                      className='font-medium text-blue-600 dark:text-blue-400 underline'
                      href={code}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {t('project.viewCode')}
                    </a>
                  </li>
                </ul>
              )}
              {live && (
                <ul>
                  <li className='font-bold uppercase mb-3'>{t('project.live')}</li>
                  <li>
                    <a
                      className='font-medium text-blue-600 dark:text-blue-400 underline'
                      href={live}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {t('project.viewSite')}
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <img src={images?.mobile} alt={`${name} mobile view`} className='mx-auto w-4/5 md:w-2/5 lg:w-1/4' />
        </div>

        <div className='mb-12'>
          <h2 className='text-xl font-medium mb-6'>{t('project.purpose')}</h2>
          <p>{t(`projects.${translationKey}.purpose`, t('project.comingSoon'))}</p>
        </div>

        <div className='md:flex md:gap-6'>
          <img
            className='drop-shadow-xl mb-12 md:w-2/4'
            src={images.desktop || '/images/Cover.png'}
            alt={`${name} desktop view`}
          />

          <div className='md:w-2/4'>
            <div className='mb-6'>
              <h2 className='font-medium'>{t('project.stackExplanation')}</h2>
              <p>{t(`projects.${translationKey}.stackExplanation`, t('project.comingSoon'))}</p>
            </div>

            <div className='mb-6'>
              <h2 className='font-medium'>{t('project.challenges')}</h2>
              <p>{t(`projects.${translationKey}.challenges`, t('project.comingSoon'))}</p>
            </div>

            <div className='mb-6'>
              <h2 className='font-medium'>{t('project.lessonsLearned')}</h2>
              <p>{t(`projects.${translationKey}.lessonsLearned`, t('project.comingSoon'))}</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Project
