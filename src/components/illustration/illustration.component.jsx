import './illustration.styles.scss'
import illustration from '../../assets/home/illustration-charts.svg'

const Illustration = () => {
  return (
    <div className="title-container__img">
      <img src={illustration} alt="Illustration Chart" />
    </div>
  )
}

export default Illustration
