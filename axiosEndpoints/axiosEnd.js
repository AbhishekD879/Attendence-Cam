import axios from "axios";
const apiClient=axios.create({
    baseURL:"https://attendancecam.azurewebsites.net/",
    timeout:60*5*1000
})

export default apiClient