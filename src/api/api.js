import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const Api = {
  baseUrl: 'https://project-management-backend-57wp.onrender.com/',

  card: {
    endpoint: function () {
      return Api.baseUrl + 'card'
    },
    readAll: function () {
      return this.endpoint() + '/'
    },
    create: function () {
      return this.endpoint() + '/'
    },
    update: function (id) {
      return `${this.endpoint()}/${id}`;
    },
    delete: function (id) {
      return `${this.endpoint()}/${id}`;
    }
  },

  buildApiGetRequest: function (url) {
    return fetch(url, { method: 'GET' }).catch(function (error) {
      console.error('Erro na carregar dados.' + url, error)
      toast.error('Erro na carregar dados da API.')
    })
  },

  buildApiPostRequest: function (url, body) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .catch(function (error) {
        console.error('Erro ao enviar dados.' + url, error)
        toast.error('Erro ao enviar dados.')
      })
  },

  buildApiPutRequest: function (url, body) {
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => {
            console.error('Erro ao atualizar dados:', error);
            throw new Error(error.message);
          });
        }
        return response;
      })
      .catch(function (error) {
        console.error('Erro ao atualizar dados.' + url, error);
        toast.error('Erro ao atualizar dados.');
      });
  },

  buildApiDeleteRequest: function (url) {
    return fetch(url, {
      method: 'DELETE'
    })
      .catch(function (error) {
        console.error('Erro ao deletar dados.' + url, error);
        toast.error('Erro ao deletar dados.');
      });
  }
}