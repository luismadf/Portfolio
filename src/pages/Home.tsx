import { ProjectList } from 'components'
import { projectList } from 'utils'

const Home = () => {
  return (
    <main>
      <section className='container mx-auto mt-12 mb-[84px] md:mt-[100px] md:mb-[200px] text-center flex flex-col gap-5'>
        <h1 className='font-normal'>
          Hi, I’m Luis 👋
          <br />
          <span className='block md:inline font-bold'>Frontend Developer</span> at Intelygenz.
        </h1>

        <h5>
          I specialize in building apps using <span className='font-bold'>Next.js</span>,{' '}
          <span className='font-bold'>React</span>, and{' '}
          <span className='font-bold'>React Native</span> to create seamless user experiences.
        </h5>
      </section>

      <section className='container mx-auto mb-24'>
        <ProjectList projects={projectList} />
      </section>
    </main>
  )
}

export default Home
