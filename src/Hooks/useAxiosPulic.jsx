import axios from "axios";

const data = axios.create({
    baseURL:"https://keep-learning-server.vercel.app"
})

const useAxiosPulic = () => {
    return [data]
};

export default useAxiosPulic;