import './footer.styles.scss'
import Timer from '../../timer/timer.component'
import Button from '../../button/button.component'

const Footer = () => {
  return (
    <footer>
      <Timer />
      <div className="button">
        <Button />
      </div>
    </footer>
  )
}

export default Footer
