<template>
    <div class="background-elevador">
        <div id="principal">
            <div class="campo_predio">
            <img src="@/assets/img/predio.png" style="height: 99vh;">
            </div>
            <div class="campo_elevador">
            <img id="elevador" src="@/assets/img/elevador.png" style="height: 99vh;">
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

</style>
