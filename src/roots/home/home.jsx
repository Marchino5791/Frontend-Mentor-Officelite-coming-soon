import Button from '../../components/button/button.component'
import { Head } from '../../components/head/head.component'
import Illustration from '../../components/illustration/illustration.component'
import Main from '../../components/main/main.component'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      {' '}
      <Head
        img={<Illustration />}
        title="A simple solution to complex tasks is coming soon"
        subtitle="Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity."
        button={<Button />}
      />
      <Main />
    </div>
  )
}

export default Home
