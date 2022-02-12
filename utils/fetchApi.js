import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '8c374248fbmshfd831e93cc49272p15bf66jsn8530a326b399'
        }
    })
    return data;
}
