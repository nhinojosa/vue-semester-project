import { ref } from 'vue'
import axios from 'axios'

const employees = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(8)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getEmployees = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/employees', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  employees.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const getDepartment = async (departmentId) => {
  const { data } = await api.get(`/api/departments/${departmentId}`)
  return data
}

const useAPI = () => {
  return { employees, pages, activePage, loading, pageSize, getEmployees, getDepartment }
}

export default useAPI