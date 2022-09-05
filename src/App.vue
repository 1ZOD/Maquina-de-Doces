<template>
  <div class="background">
    <div class="base_grid">
      <div class="campo_maquina">
        <img alt="maquina_doces" src="./assets/maquina.png">
        <button type="button" id="botao-a"><img alt="botao-a" src="./assets/A.png" style="height: 4.5vh;"/></button>
        <button type="button"><img alt="botao-b" src="./assets/B.png" style="height: 4.5vh;"/></button>
        <button type="button"><img alt="botao-c" src="./assets/C.png" style="height: 4.5vh;"/></button>
        <input type="text" disabled='true' v-model="creditos">
      </div>
      <div class="saida_doces">
        <button type="button"><img alt="botao-c" src="./assets/saida_maquina.png" style="height: 8vh;"/></button>
      </div>
      <div class="campo-moedas">
        <button type="button" @click="umreal"><img alt="1 real" src="./assets/1real.png"  style="transition: ease 0.5s;" height="170" width="170"/></button>
        <button type="button"><img alt="2 real" src="./assets/2reais.png" style="transition: ease 0.5s;" height="170" width="170"/></button>
        <button type="button"><img alt="5 real" src="./assets/5reais.png" style="transition: ease 0.5s;" height="170" width="170"></button>
      </div>
    </div>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
  export default{
    data(){
      return{
        creditos:"R$ 0,00"
      }
    },
    methods:{
      umreal(){
        console.log("teste")
      }
    }
  }

</script>

<style>

*{
  margin: 0%;
}
/* #--BACKGROUND--# */
.background{
  margin: 0%;
  height: 100vh;
  background-image: url(./assets/background.png);
  background-repeat: no-repeat;
}
/* #--FIM-BACKGROUND--# */

/* #--DIVIDE O HTML EM DUAS COLUNAS--# */
.base_grid{
  display: grid;
  grid-template-columns: 100vh 0vh 100vh;
  justify-items: left;
  column-gap: 10px;
}
/* #--FIM - DIVIDE O HTML EM DUAS COLUNAS--# */

/* #--IMAGEM MAQUINA DE DOCES--# */
.campo_maquina > img{
  height: 95vh;
  width: auto;
  padding-left: 10vh;
  z-index: 0;
}
/* #--FIM DA IMAGEM MAQUINA DE DOCES--# */

/* #--BOTOES ABC--# */
.campo_maquina > button{
  position:relative; 
  top:-40vh; 
  left:54vh;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
/* #--FIM BOTOES ABC--# */
.campo_maquina > input{
  position:relative; 
  top:-26vh; 
  left:16.5vh;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 2.6vh;
}

/* #--TAMPA PRETA MAQUINA--# */
.saida_doces > button{
  position:relative; 
  top:70vh; 
  left:-50vh;
  border: none;
  background-color: transparent;
}
/* #--FIM TAMPA PRETA MAQUINA--# */

/* #--MOEDAS--# */
.campo-moedas > button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: ease 1s;
}

.campo-moedas > button>img:hover {
  height: 190px ;
  width: 190px;
  border: none;
  cursor: pointer;
  transition: ease 0.3s;
}
/* #--FIM MOEDAS--# */
</style>
