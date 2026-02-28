import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from 'components'
import ErrorBoundary from 'components/ErrorBoundary'
import LoadingSpinner from 'components/ui/LoadingSpinner'
import { AnimatePresence } from 'framer-motion'

const Home = lazy(() => import('pages/Home'))
const Project = lazy(() => import('pages/Project'))
const CV = lazy(() => import('pages/CV'))
const NotFound = lazy(() => import('pages/NotFound'))

const App = () => {
  const location = useLocation()

  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path='/project/:id' element={<Project />} />
              <Route path='/curriculum' element={<CV />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}

export default App
