import axios from "axios";
const baseUrl = 'http://localhost:3000/todos';

const getTodo = () => {
    return axios.get(baseUrl)
}
const createTodo = newTodo => {
    const request = axios.post(baseUrl, newTodo)
    return request.then(response => response.data)
}
const deleteTodo = id => {
    return axios.delete(`${baseUrl}/${id}`)
}
const updateTodo = (id, updatedTodo) =>{
    return axios.put(`${baseUrl}/${id}`, updatedTodo)
    .then(response => response.data);
}

export default{getTodo, createTodo, deleteTodo, updateTodo}