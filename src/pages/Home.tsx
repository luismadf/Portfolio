import { Trans, useTranslation } from 'react-i18next'
import { Project, SEO, PageTransition, ContactIcons } from 'components'
import { projectList } from 'utils'

const Home = () => {
  const { t } = useTranslation()

  return (
    <PageTransition>
      <SEO title="Luis de Freites | Frontend Developer" />

      {/* Hero */}
      <section className='container mx-auto mt-12 mb-[84px] md:mt-[100px] md:mb-[140px] text-center flex flex-col gap-5'>
        <h1 className='font-normal'>
          {t('home.greeting')}
          <br />
          <span className='block md:inline font-bold'>{t('home.role')}</span> {t('home.at')}
        </h1>

        <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
          <Trans i18nKey="home.subtitle" components={{ bold: <span className='font-bold' /> }} />
        </p>
      </section>

      {/* About Me */}
      <section className='container mx-auto mb-24'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-2xl font-bold mb-8 text-center'>{t('home.aboutTitle')}</h2>
          <div className='flex flex-col md:flex-row gap-8 items-start'>
            <img
              src='/images/circle-luis.png'
              alt='Luis de Freites'
              className='w-32 h-32 rounded-full mx-auto md:mx-0 flex-shrink-0'
            />
            <div className='space-y-4 text-slate-600 dark:text-slate-300'>
              <p>{t('home.aboutP1')}</p>
              <p>{t('home.aboutP2')}</p>
              <p>{t('home.aboutP3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className='container mx-auto mb-24 flex flex-col gap-12'>
        {projectList.map((project) => (
          <Project key={`project-${project.id}`} project={project} />
        ))}
      </section>

      {/* Contact */}
      <section className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-20 transition-colors duration-300'>
        <div className='container mx-auto text-center'>
          <h2 className='text-2xl font-bold mb-4'>{t('home.contactTitle')}</h2>
          <p className='text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto'>
            {t('home.contactSubtitle')}
          </p>
          <a
            href='mailto:luisdefreites120@gmail.com'
            className='inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors mb-6'
          >
            {t('home.contactEmail')}
          </a>
          <p className='text-slate-400 dark:text-slate-500 text-sm mb-4'>{t('home.contactOr')}</p>
          <div className='flex justify-center'>
            <ContactIcons />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
