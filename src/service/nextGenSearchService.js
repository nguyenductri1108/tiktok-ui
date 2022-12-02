import axios from 'axios';

const BASE_API_URL = 'https://tiktok.fullstack.edu.vn';

export const AxiosGet = async (params = {}, path, header = false) => {
    let response = await axios({
        method: 'get',
        url: `${BASE_API_URL}/${path}`,
        params,
        headers: header
            ? {
                  Authorization: `Bearer ${localStorage.getItem('bearer_token')}`,
              }
            : null,
    })
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
            return null;
        });
    return response;
};

export const AxiosPost = async (data, path, header = false, uploadFunc = () => {}) => {
    let response = await axios({
        method: 'post',
        url: `${BASE_API_URL}/${path}`,
        data,
        headers: header
            ? {
                  Authorization: `Bearer ${localStorage.getItem('bearer_token')}`,
              }
            : null,
        onDownloadProgress: (...data) => {
            console.log(data);
        },
    })
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
            return null;
        });
    return response;
};
