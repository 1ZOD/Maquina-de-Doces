import { backend } from "./_backend";



export const apiService = {
    analyser: async (codigo) => {
        return await backend.post('',{codigo});
    },
}