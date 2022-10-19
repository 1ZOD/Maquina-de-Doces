<template>
    <div id="resultado">
        <span class="titulo-resultado">Resultado</span>
        <textarea class="campo-resultado" name="codigo" id="resultado"></textarea>
        <button class="btn-gerar-resultado" type="button" @click="teste">Analisar</button>
    </div>
</template>
<script>

export default {
    name:'ResultadoComponente',
    data(){
        return{
            porta_aberta: 0,
        };
    },
    methods:{
        teste(){
            var codigo = document.getElementById("codigo").value
            console.log(codigo);
        }
    }
}

</script>
<style scoped >

#resultado{
    display: flex;
    flex-direction: column;
    padding-top: 2%;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;
}
.titulo-resultado{
    font-family: 'Poppins', sans-serif;
    font-size: 2vw;
    color: rgb(68, 67, 67);
}
.campo-resultado{
    font-size: 2vh;
    padding: 1vh;
    width: 78vw;
    height: 50vh;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 12px 9px 17px 0px rgba(39, 74, 126, 0.137); 
}

.campo-resultado:focus{
    /* box-shadow: 0 0 0 0; */
    outline: 0;
    box-shadow: 12px 9px 17px 0px rgba(39, 74, 126, 0.137); 
}
.btn-gerar-resultado{
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

.btn-gerar-resultado:hover{
    cursor: pointer;
    background-color: rgb(13, 129, 207);
    transition: 0.4s;
    box-shadow: 12px 9px 17px 0px rgba(39, 74, 126, 0.137); 
}

</style>