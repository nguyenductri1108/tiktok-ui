import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};
export const post = async (path, option = {}) => {
    const response = await request.post(path, option);
    return response.data;
};
export const imagePost = async (path, option = {}) => {
    const response = await request.post(path, option);
    return response.data;
};

export default request;
