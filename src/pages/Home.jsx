import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import { Api } from '../api/api'
import Card from '../components/Card/Card';

export default function Home() {
  const [cardList, setCardList] = useState([]);

  async function fetchData() {
    const apiUrl = Api.card.readAll()

    const response = await Api.buildApiGetRequest(apiUrl)
    
    if (response.ok) {
      const data = await response.json()

      setCardList(data)
    } else {
      toast.error('Erro ao carregar lista de Cards.')
    }
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