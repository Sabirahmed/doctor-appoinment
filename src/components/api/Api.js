import axios from "axios";

const baseUrl = 'http://localhost:8080/';

export const getData = (url) => {
   
    return axios.get(`${baseUrl}${url}`)
     //return fetch(`${baseUrl}${url}`)

}

export const postData = (url, postObj) => {
    return axios.post(`${baseUrl}${url}`, postObj);
}

export const deleteData = (url, id) => {
   // console.log(url, id);
    return axios.delete(`${baseUrl}${url}/${id}`);
}