<template>
    <div>
        <TableData :columns="columns" :entries="response"/>
    </div>
</template>

<script>

import TableData from '@/shared/TableData.vue'

export default {
    props:["response"],
    data(){
        return {
            columns: [
                {
                    label: 'Token',
                    key: 'token',
                },
                {
                    label: 'Lexema',
                    key: 'lexema',
                },
                {
                    label: 'Descrição',
                    key: 'descricao'
                },
            ],
        };
    },
        components:{
            TableData
        },  
        methods: {
            tabelaResponse(response){
                console.log("ESSE É O RESPONSE")
                console.log(response)
            }
        },
};
</script>


<style scoped>


</style>
