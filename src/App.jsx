import './App.css'
import Card from './components/Card/Card'

export function App() {
  const menu = {
    name: 'Menu Online',
    image: 'https://utfs.io/f/0242be41-526f-4b8f-82d0-27a7d9059b40-1lzfk1.webp'
  }

  const sorteio = {
    name: 'Sorteios X',
    image: 'https://utfs.io/f/eca046a2-0023-40b0-a89a-d2a60826926a-dt783c.webp'
  }

  const educa = {
    name: 'Educação Infantil',
    image: 'https://utfs.io/f/91790aa0-5da0-4f3a-bea1-31c80ed765cc-kgk4y2.webp'
  }

  const calc = {
    name: 'Calc IMC',
    image: 'https://utfs.io/f/c480d36f-d59b-47e7-93a3-0480f33f27db-92gaoe.webp'
  }

  const cardList = [menu, sorteio, educa, calc]

  return (
    <>
    <div className='cards'>
      {cardList.map(function (card, index) {
        return <Card key={index} item={card} />
      })}
    </div>
    </>
  )
}
