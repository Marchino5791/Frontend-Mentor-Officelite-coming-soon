import cardData from './card/cardData.json'
import { Card } from './card/card.component'
import './main.styles.scss'
import Footer from './footer/footer.component'

const Main = () => {
  return (
    <main>
      <div className="background">&nbsp;</div>
      <div className="card-container">
        {cardData.map((card) => (
          <Card key={card.id} text={card} />
        ))}
      </div>
      <Footer />
    </main>
  )
}

export default Main
