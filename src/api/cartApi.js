import { getEnvVariables } from '../helpers/getEnvVariables';
import axios from 'axios'

const { VITE_API_URL } = getEnvVariables()


export const cartApi = axios.create({
    baseURL: VITE_API_URL
})

