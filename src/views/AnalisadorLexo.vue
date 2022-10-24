<template>
    <div class="grid-principal-analisador">
        <analisador @tabelaResponse="tabelaResponse" @trocarPagina="trocarPagina"/>
        <dir v-if="pagina >= 1">
            <div id="resultado">
                <span class="titulo-resultado">Resultado</span>
                <div class="campo-resultado">
                    <Tabela :response="response" @trocarPagina="trocarPagina" />
                </div>
            </div>
        </dir>
    </div>
</template>

<script>
import Analisador from "@/components/AnalisadorComponente.vue"
import Tabela from "@/components/ResultadoTable.vue"

export default {
      name: 'AnalisadorView',
      data(){
        return{
            pagina: "",
            response:'',
        };
      },
      components:{
        Analisador,
        Tabela
      },
      methods: {
            trocarPagina(pagina){
                this.pagina = pagina;
            },
            tabelaResponse(response){
                this.response = response
                console.log('AQUI RESPONSE')
                console.log(response)
            }
        },
    }

</script>

<style>

.grid-principal-analisador{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

</style>