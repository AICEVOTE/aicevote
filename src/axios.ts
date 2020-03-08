import axiosBase from "axios";

const baseURI = "https://api.aicevote.com";
export default axiosBase.create({
    baseURL: baseURI,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    responseType: "json"
});
