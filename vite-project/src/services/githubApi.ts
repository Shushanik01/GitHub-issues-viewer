import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE;



export const getIssues = async (owner: string, repo: string, page:number) => {
    try {
        const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/issues?per_page=8&page=${page}`);
        console.log(response.data);

        return response.data
        
    } catch (err) {
        console.log((err as Error).message);
        return []
    }
}
