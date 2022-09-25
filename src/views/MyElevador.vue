<template>
    <div class="background-elevador">
        <div id="principal">
            <div class="campo-predio">
              <img src="@/assets/img/predio.png">
              <img id="elevador" src="@/assets/img/elevador.png">
              <button type="button" @click="3"><img alt="3 andar" src="@/assets/img/3botao.png" style="height: 10vh;"/></button>
              <button type="button" @click="2"><img alt="2 andar" src="@/assets/img/2botao.png" style="height: 10vh;"/></button>
              <button type="button" @click="1"><img alt="1 andar" src="@/assets/img/1botao.png" style="height: 10vh;"/></button>
              <button type="button" @click="terro"><img alt="terreo" src="@/assets/img/terreo.png" style="height: 10vh;"/></button>
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
        // terreio_ao_1(){
        //     var myvideo = document.querySelector("1")
        //     myvideo.play();
        // },
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
    top:40vh; 
    left:-20vh;
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
