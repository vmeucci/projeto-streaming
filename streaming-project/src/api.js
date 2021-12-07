import axios from "axios";

export default axios.create({
    baseURL: "localhost: 3030",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Acess-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});