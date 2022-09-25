<template>
    <div class="background-elevador">
        <div id="principal">
            <div class="campo-predio">
              <img src="@/assets/img/predio.png">
              <img id="elevador" src="@/assets/img/elevador.png">
              <button type="button" @click="terceiro_andar"><img alt="3 andar" src="@/assets/img/3botao.png" style="height: 10vh;"/></button>
              <button type="button" @click="segundo_andar"><img alt="2 andar" src="@/assets/img/2botao.png" style="height: 10vh;"/></button>
              <button type="button" @click="primeiro_andar"><img alt="1 andar" src="@/assets/img/1botao.png" style="height: 10vh;"/></button>
              <button type="button" @click="terro"><img alt="terreo" src="@/assets/img/terreo.png" style="height: 10vh;"/></button>
              <img id="gatinho" src="@/assets/img/gato.png">
              <img id="porta_esquerda" src="@/assets/img/porta_esquerda.png">
              <img id="porta_direita" src="@/assets/img/porta_direita.png">
            </div>
              <div class="controle-portas">
                <button type="button" @click="fechar"><img alt="botao-fechar" src="@/assets/img/fechar.png" style="height: 10vh;"/></button>
                <button type="button" @click="abrir"><img alt="botao-abrir" src="@/assets/img/abrir.png" style="height: 10vh;"/></button>
              </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'app',
      data(){
        return{
          porta_aberta: 0,
        };
      },
      methods:{
        terro(){
          var elevador = document.getElementById("elevador")
          var gato = document.getElementById("gatinho")
          var porta_esquerda = document.getElementById("porta_esquerda")
          var porta_direita = document.getElementById("porta_direita")
          elevador.style.top = "38vh"
          gato.style.top = "88vh"
          porta_esquerda.style.top = "81vh" 
          porta_direita.style.top = "81vh"
        },
        primeiro_andar(){
          var elevador = document.getElementById("elevador")
          var gato = document.getElementById("gatinho")
          var porta_esquerda = document.getElementById("porta_esquerda")
          var porta_direita = document.getElementById("porta_direita")
          elevador.style.top = "23vh"
          gato.style.top = "72.5vh"
          porta_esquerda.style.top = "65.6vh" 
          porta_direita.style.top = "65.6vh"
        },
        segundo_andar(){
          var porta_esquerda = document.getElementById("porta_esquerda")
          var porta_direita = document.getElementById("porta_direita")
          var elevador = document.getElementById("elevador")
          var gato = document.getElementById("gatinho")
          elevador.style.top = "6.5vh"
          gato.style.top = "56vh"
          porta_esquerda.style.top = "49.1vh" 
          porta_direita.style.top = "49.1vh"
        },
        terceiro_andar(){
          var porta_esquerda = document.getElementById("porta_esquerda")
          var porta_direita = document.getElementById("porta_direita")
          var elevador = document.getElementById("elevador")
          var gato = document.getElementById("gatinho")
          elevador.style.top = "-8vh"
          gato.style.top = "41.7vh"
          porta_esquerda.style.top = "35vh" 
          porta_direita.style.top = "35vh"
        },
        abrir(){
          var porta_esquerda = document.getElementById("porta_esquerda")
          var porta_direita = document.getElementById("porta_direita")
          porta_esquerda.style.display = "none" 
          porta_direita.style.display = "none"
        },
        fechar(){
          var porta_esquerda = document.getElementById("porta_esquerda")
          var porta_direita = document.getElementById("porta_direita")
          porta_esquerda.style.display = "flex" 
          porta_direita.style.display = "flex"
        },
      }
    }
</script>

<style>
    
html, body {
 overflow: hidden;
}

.background-elevador{
    margin: 0%;
    height: 100%;
    width: 100%;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
    /* background-repeat: repeat; */
}

.campo-predio > img{
    height: 99vh;
}


#principal{
    display: grid;
    grid-template-columns: 1vh 1vh 1vh 1vh;
    justify-items: left;
    column-gap: 10px;
}
#elevador{
    position:absolute; 
    top:38vh; 
    left:-19.7vh;
    transition: ease 2.5s;
}

#gatinho{
    position:absolute; 
    top:88vh;
    left:65vh;
    height: 4vh;
    z-index: 33;
    /* cursor: pointer; */
    transition: ease 2.5s;
}

#porta_esquerda{
    display: flex;
    position:absolute; 
    top:81vh;
    left:64.7vh;
    height: 11.5vh;
    z-index: 33;
    /* cursor: pointer; */
    transition: ease 2.5s;
}

#porta_direita{
    display: flex;
    position:absolute; 
    top:81vh;
    left:68.4vh;
    height: 11.5vh;
    z-index: 33;
    /* cursor: pointer; */
    transition: ease 2.5s;
}

.campo-predio> button{
    position:relative;
    display: flex; 
    padding-bottom: 5vh;
    top:-80vh; 
    left:130vh;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.controle-portas> button{
    position:relative;
    display: flex; 
    padding-bottom: 5vh;
    top:35vh; 
    left:150vh;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

</style>
