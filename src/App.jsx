import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

export function App() {
  const [cardList, setCardList] = useState([]);

  async function fetchData() {
    const apiUrl = "https://project-management-backend-57wp.onrender.com/card"

    const response = await fetch(apiUrl)
    const data = await response.json()

    setCardList(data)
  }

  useEffect(function () {
    fetchData()
  }, [])

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
