import EnvManager from "@/config/envManager";
import axios from "axios";

export const backend = axios.create({
    baseURL: EnvManager.API_URL,
    // withCredentials: true,
});