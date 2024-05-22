import axios from 'axios';

const API_URL = 'localhost:37373'; // Your Express server URL

export const getHelloWorld = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Hello World:', error);
        throw error;
    }
};
