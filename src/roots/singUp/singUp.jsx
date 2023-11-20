import './singUp.scss'
import { Head } from '../../components/head/head.component'
import Timer from '../../components/timer/timer.component'
import { Form } from '../../components/form/form.component'

const SingUp = () => {
  return (
    <div className="singUp">
      <div className="singUp__head">
        <Head
          img=""
          title="Work smarter. Save time."
          subtitle="Easily manage your projects. Get on the list and receive in-app perks available only to 
  early subscribers. We are moving into final development and getting ready for official launch soon."
          button=""
        />
        <Timer />
      </div>
      <div className="singUp__form">
        <Form />
      </div>
      <div className="background"></div>
    </div>
  )
}

export default SingUp
