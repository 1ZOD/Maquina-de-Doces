<template>
    <div id="Analisador">
        <span class="titulo">Escreva o Codigo</span>
        <textarea v-model.lazy="codigoForm.codigo" type="text" class="campo-codigo" name="codigo" id="codigo"></textarea>
        <button v-on:click="SubmitDadoPost" class="btn-gerar" type="button">Analisar</button>
    </div>
</template>

<script>

import { apiService } from '@/services/codigo';

export default {
      name:'AnalisadorComponente',
      emits: ['trocarPagina','tabelaResponse'],
        data () {
            return{
                codigoForm: {
                    codigo: '',
                },
            }
        },
        methods:{
            async SubmitDadoPost(e) {
                e.preventDefault();
                console.log(this.codigoForm.codigo)
                apiService.analyser(this.codigoForm.codigo).then((response) => {
                    this.$emit("tabelaResponse", response.data);
                    console.log(response.data)
                    this.$emit("trocarPagina", 1);
                })
                .catch((error) => {
                    // console.log(error)
                    this.showAlert(error.response.data.message)
                });
            },
            trocarPagina(){
                this.$emit("trocarPagina", 1);
            }
        }   
}
</script>

<style>

html{
    /* /* height: 100%; */
    background-image: linear-gradient( 109.6deg,  rgba(247,202,201,1) 20.6%, rgba(146,168,209,1) 85.9% );
    background-image: repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed; 
}

#Analisador{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;
    padding-top: 10vh;
    padding-bottom: 2rem;
}

.titulo{
    font-family: 'Poppins', sans-serif;
    font-size: 2vw;
    color: rgb(68, 67, 67);
}
.campo-codigo{
    font-size: 2vh;
    padding: 1vh;
    width: 78vw;
    height: 50vh;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 12px 9px 17px 0px rgba(39, 74, 126, 0.137); 
}

.campo-codigo:focus{
    /* box-shadow: 0 0 0 0; */
    outline: 0;
    box-shadow: 12px 9px 17px 0px rgba(39, 74, 126, 0.137); 
}
.btn-gerar{
    /* font-family: 'Monteserrat', sans-serif; */
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    border-radius: 8px;
    border: none;
    color: white;
    width: 11vw;
    height: 4vh;
    background-color: rgb(133, 153, 192);
    transition: 0.4s;
    box-shadow: 12px 9px 17px 0px rgba(39, 74, 126, 0.137); 
}

.btn-gerar:hover{
    cursor: pointer;
    background-color: rgb(13, 129, 207);
    transition: 0.4s;
    box-shadow: 12px 9px 17px 0px rgba(39, 74, 126, 0.137); 
}

</style>