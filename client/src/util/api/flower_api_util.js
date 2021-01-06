import axios from "axios"

export const fetchFlower = () => {
  return axios.get("/flower")
}