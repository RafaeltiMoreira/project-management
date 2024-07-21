import { useNavigate } from 'react-router-dom'
import { Api } from '../../api/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Create.css'

export default function Create() {
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    const addCard = {
      title: event.target.title.value,
      image: event.target.image.value,
      description: event.target.description.value,
      deploy: event.target.deploy.value
    }

    const apiUrl = Api.card.create()

    const response = await Api.buildApiPostRequest(apiUrl, addCard)

    if (response.ok) {
      toast.success("Card criado com sucesso!")
      navigate('/')
    } else {
      const body = await response.json()
      toast.error('Erro ao criar novo card: ' + body.error)
    }
  }
  return (
    <div>
      <h1>Adicionar Card</h1>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" name="title" placeholder="Insira um título" required />
          </div>

          <div>
            <label htmlFor="image">Imagem (URL):</label>
            <input type="text" id="image" name="image" placeholder="Insira a URL da imagem" required />
          </div>

          <div>
            <label htmlFor="description">Descrição:</label>
            <input type="text" id="description" name="description" placeholder="Insira a descrição do card" required />
          </div>

          <div>
            <label htmlFor="deploy">GitHub (URL):</label>
            <input type="text" id="deploy" name="deploy" placeholder="Insira a URL do GitHub" required />
          </div>

          <div className="btn">
            <button className='btn-add' type="submit">Criar</button>
            <button className='btn-cancel' type="reset">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}