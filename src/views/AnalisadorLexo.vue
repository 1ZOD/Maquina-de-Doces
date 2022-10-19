<template>
    <div class="grid-principal-analisador">
        <analisador @trocarPagina="trocarPagina"/>
        <dir v-if="pagina >= 1">
            <Resultado @trocarPagina="trocarPagina" />
        </dir>
    </div>
</template>

<script>
import Analisador from "@/components/AnalisadorComponente.vue"
import Resultado from "@/components/ResultadoComponente.vue"

export default {
      name: 'AnalisadorView',
      data(){
        return{
            pagina: "",
        };
      },
      components:{
        Analisador,
        Resultado
      },
      methods: {
            trocarPagina(pagina){
                this.pagina = pagina;
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