import axios from "axios";

export const userApi = {
    getListUser: () => {
        return axios.get(`/users`);
    }
};