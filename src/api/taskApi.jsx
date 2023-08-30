import axios from "axios";

export const taskApi = {
    getListTaskUser: (idUser) => {
        return axios.get(`/users/${idUser}/todos`);
    },
    markDoneTask: (idTask, data) => {
        return axios.patch(`/todos/${idTask}`, data);
    }
};