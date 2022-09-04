<template>
  <div class="background">
    <div class="base_grid">
    <div class="campo_maquina">
      <img alt="maquina_doces" src="./assets/maquina.png">
      <button type="button"><img alt="botao-a" src="./assets/A.png" style='position:relative; top:-35vh; left:-44vh;' height="39" width="39"/></button>
      <button type="button"><img alt="botao-b" src="./assets/B.png" style='position:relative; top:-35vh; left:-44vh;' height="39" width="39"/></button>
      <button type="button"><img alt="botao-c" src="./assets/C.png" style='position:relative; top:-35vh; left:-44vh;;' height="39" width="39"/></button>
    </div>
    <div class="campo-moedas">
      <button type="button"><img alt="1 real" src="./assets/1real.png"  style="transition: ease 0.5s;" height="170" width="170"/></button>
      <button type="button"><img alt="2 real" src="./assets/2reais.png" style="transition: ease 0.5s;" height="170" width="170"/></button>
      <button type="button"><img alt="5 real" src="./assets/5reais.png" style="transition: ease 0.5s;" height="170" width="170"></button>
    </div>
  </div>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>

*{
  margin: 0%;
}
.background{
  margin: 0%;
  height: 100vh;
  background-image: url(./assets/background.png);
  background-repeat: no-repeat;
}

.base_grid{
  display: grid;
  grid-template-columns: auto auto;
  justify-items: left;
  column-gap: 10px;
}

.campo_maquina > img{
  height: 95vh;
  padding-left: 10vh;
  z-index: 0;
}
.campo_maquina > button{
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: ease 1s;
}

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

</style>
