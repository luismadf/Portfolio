import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { Button, Logo } from 'components'

const Header: React.FC = () => {
  let navigate = useNavigate()

  useEffect(() => {
    gsap.from('.logo-component', {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    })
    gsap.from('.menu-item', {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      y: 20,
      stagger: 0.2,
    })
  }, [])

  return (
    <header>
      <div className='container mx-auto py-6 flex justify-between items-center'>
        <Logo showLogoImage={true} />
        <Button className='hidden sm:block' onClick={() => navigate('/curriculum')}>
          Descargar CV
        </Button>
      </div>
    </header>
  )
}

export default Header
