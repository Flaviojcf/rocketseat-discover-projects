import { BASE_URL } from '../../db';
import axios from "axios";

export const api = axios.create({
    baseURL: BASE_URL
})

