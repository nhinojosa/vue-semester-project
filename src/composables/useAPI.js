import { ref } from 'vue'
import axios from 'axios'

const demons = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(12)
const currentDemon = ref(null)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getDemons = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/demons', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  demons.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const fetchDemon = async (id) => {
    const { data } = await api.get(`/api/demons/${id}`)
    currentDemon.value = data
    console.log(data)
  }

const useAPI = () => {
  return { demons, pages, activePage, loading, pageSize, getDemons, fetchDemon, currentDemon}
}

export default useAPI