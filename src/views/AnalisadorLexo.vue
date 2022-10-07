<template>
    <div class="bg">
        <div id="Analisador">
            <span class="titulo">Escreva o Codigo</span>
            <textarea class="campo-codigo" name="codigo"></textarea>
            <button class="btn-gerar" type="button" @click="primeiro_andar"> Analisar </button>
        </div>
    </div>
</template>
<script>


</script>
<style scoped>
    
*{
    margin: 0px;
}

html, body {
    overflow: visible;
}

.bg{
    background-image: linear-gradient( 109.6deg,  rgba(247,202,201,1) 20.6%, rgba(146,168,209,1) 85.9% );
    background-image: repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed; 
    height: 1000vh;
}

#Analisador{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;
    padding-top: 10vh;
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
    
}

</style>