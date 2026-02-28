import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Sun, Moon, Languages } from 'lucide-react'
import { Button, Logo } from 'components'
import { useDarkMode } from 'hooks'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const [colorTheme, setTheme] = useDarkMode()
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
  }

  return (
    <header className="w-full bg-slate-50/80 backdrop-blur-md dark:bg-slate-950/80 sticky top-0 z-50 border-b border-transparent dark:border-slate-800 transition-colors duration-300">
      <div className='container mx-auto py-4 flex justify-between items-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Logo showLogoImage={true} />
        </motion.div>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="icon"
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="relative"
          >
            <Languages className="w-5 h-5" />
            <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center">
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </span>
          </Button>

          <Button
            variant="icon"
            onClick={() => setTheme(colorTheme)}
            aria-label="Toggle Dark Mode"
          >
            {colorTheme === 'light' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          <Button className='hidden sm:block' onClick={() => navigate('/curriculum')}>
            {t('header.downloadCV')}
          </Button>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
