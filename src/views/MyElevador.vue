<template>
   <div class="background-elevador">
        <div>
            <button @click="terreio_ao_1" style="height: 4.5vh;">Terreo</button>
        </div>
        <dir class="videos">
            <video id='1' src="@/assets/video/terreo_ao_1.mp4" style="height: 99vh;"></video>
        </dir>
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
        terreio_ao_1(){
            var myvideo = document.querySelector("1")
            myvideo.play();
        },
      }
    }
</script>

<style>

.background-elevador{
    margin: 0%;
    height: 100vh;
    width: 100%;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
    /* background-repeat: repeat; */
}

.videos{
    height: 10vh;
}
</style>
