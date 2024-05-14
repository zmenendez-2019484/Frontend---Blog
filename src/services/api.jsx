import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/blog/v1',
    timeout: 5000
});

export const getPosts = async () => {
    try {
        const response = await apiClient.get('/post');
        return {
            error: false,
            data: response.data
        };
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};
