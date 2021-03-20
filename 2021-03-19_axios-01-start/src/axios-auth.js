import axios from "axios"

const axiosAuth = axios.create({
    baseURL: "https://axios-test-44b62-default-rtdb.europe-west1.firebasedatabase.app"
})

axiosAuth.defaults.headers.common['SOMETHING'] = "something"

export default axiosAuth
