import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SEO, PageTransition, Button } from 'components'

const NotFound = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <PageTransition>
      <SEO title="404 - Page Not Found | Luis de Freites" />
      <div className='container mx-auto flex flex-col items-center justify-center py-24 text-center'>
        <h1 className='text-8xl font-bold text-primary mb-4'>404</h1>
        <h2 className='text-2xl font-medium mb-4'>{t('notFound.title')}</h2>
        <p className='text-slate-500 dark:text-slate-400 mb-8 max-w-md'>
          {t('notFound.description')}
        </p>
        <Button onClick={() => navigate('/')}>
          {t('notFound.goHome')}
        </Button>
      </div>
    </PageTransition>
  )
}

export default NotFound
