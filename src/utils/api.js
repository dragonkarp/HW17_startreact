import axios from "axios"


export default { 
    getRandomPeople: () => {
        return axios.get("https://randomuser.me/api/?results=100")
    }
 }