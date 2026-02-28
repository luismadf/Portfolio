import { Trans, useTranslation } from 'react-i18next'
import { Project, SEO, PageTransition, ContactIcons } from 'components'
import { projectList } from 'utils'

const Home = () => {
  const { t } = useTranslation()

  return (
    <PageTransition>
      <SEO title="Luis de Freites | Frontend Developer" />

      {/* Hero */}
      <section className='container mx-auto mt-12 mb-[84px] md:mt-[120px] md:mb-[160px] flex flex-col items-center text-center gap-6'>
        <h1 className='font-normal text-5xl md:text-7xl tracking-tight'>
          {t('home.greeting')}
          <br />
          <span className='block md:inline font-bold italic text-primary'>{t('home.role')}</span> {t('home.at')}
        </h1>

        <p className='text-lg md:text-xl text-muted dark:text-dark-muted max-w-2xl mx-auto'>
          <Trans i18nKey="home.subtitle" components={{ bold: <span className='font-bold text-ink dark:text-white' /> }} />
        </p>
      </section>

      {/* About Me */}
      <section className='container mx-auto mb-32'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold mb-10 text-center tracking-tight'>{t('home.aboutTitle')}</h2>
          <div className='flex flex-col md:flex-row gap-10 items-center md:items-start'>
            <img
              src='/images/circle-luis.png'
              alt='Luis de Freites'
              className='w-40 h-40 rounded-full mx-auto md:mx-0 shrink-0 shadow-xl shadow-primary/10'
            />
            <div className='space-y-5 text-muted dark:text-gray-300 text-lg'>
              <p>{t('home.aboutP1')}</p>
              <p>{t('home.aboutP2')}</p>
              <p>{t('home.aboutP3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className='container mx-auto mb-32 flex flex-col gap-20'>
        {projectList.map((project) => (
          <Project key={`project-${project.id}`} project={project} />
        ))}
      </section>

      {/* Contact */}
      <section className='bg-slate-100 dark:bg-[#151413] py-24 transition-colors duration-300 border-y border-slate-200 dark:border-slate-800/50'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-6 tracking-tight'>{t('home.contactTitle')}</h2>
          <p className='text-muted dark:text-dark-muted mb-10 max-w-md mx-auto text-lg'>
            {t('home.contactSubtitle')}
          </p>
          <a
            href='mailto:luisdefreites120@gmail.com'
            className='inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-md shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all duration-200 px-8 py-4 font-semibold text-lg mb-8'
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
