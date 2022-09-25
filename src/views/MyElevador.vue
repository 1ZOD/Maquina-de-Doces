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
              <img id="gato" src="@/assets/img/gato.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'app',
      data(){
        return{
          contador: 0,
        };
      },
      methods:{
        terro(){
          var elevador = document.getElementById("elevador")
          var gato = document.getElementById("gato")
          elevador.style.top = "38vh"
          gato.style.top = "88vh"
        },
        primeiro_andar(){
          var elevador = document.getElementById("elevador")
          var gato = document.getElementById("gato")
          elevador.style.top = "23vh"
          gato.style.top = "72.5vh"
        },
        segundo_andar(){
          var elevador = document.getElementById("elevador")
          var gato = document.getElementById("gato")
          elevador.style.top = "6.5vh"
          gato.style.top = "56vh"
        },
        terceiro_andar(){
          var elevador = document.getElementById("elevador")
          var gato = document.getElementById("gato")
          elevador.style.top = "-8vh"
          gato.style.top = "41.7vh"
        }
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

#gato{
    position:absolute; 
    top:88vh;
    left:65vh;
    height: 4vh;
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

</style>
