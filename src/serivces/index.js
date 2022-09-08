import axios from "axios"

const headers = {
  "Content-Type": "application/json"
};

const API = axios.create({
  baseURL: `https://api.github.com/users`,
  headers
})


export const getRepositories = async (user) => {
  try {
    const response = await API.get(`/${user}/repos`)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}