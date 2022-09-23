<template>
  <div class="background">
    <img id="gato" @click="gato_maluco" alt="gatinho" src="./assets/img/gato.png">
    <div class="base_grid">
      <div class="campo_maquina">
        <img alt="maquina_doces" src="./assets/img/maquina.png">
        <button type="button" @click="botaoA"><img alt="botao-a" src="./assets/img/A.png" style="height: 4.5vh;"/></button>
        <button type="button" @click="botaoB"><img alt="botao-b" src="./assets/img/B.png" style="height: 4.5vh;"/></button>
        <button type="button" @click="botaoC"><img alt="botao-c" src="./assets/img/C.png" style="height: 4.5vh;"/></button>
        <input type="text" disabled='true' v-model="creditos">
      </div>
      <div class="saida_doces">
        <button type="button"><img alt="botao-c" src="./assets/img/saida_maquina.png" style="height: 8vh;"/></button>
        <button type="button"><img alt="botao-c" src="./assets/img/saco.png" style="height:10vh;width:7vw;position:absolute; top:1vh; left:2.5vh;z-index: 4;"/></button>
      </div>
      <div class="doces-comprados">
        <div class="doce-laranja">
          <button type="button" id="laranja" ><img alt="botao-c" src="./assets/img/docelaranja.png" style="height: 4vh;"/></button>
        </div>
        <div class="doce-rosa">
        <button type="button" id="rosa" ><img alt="botao-c" src="./assets/img/doocerosa.png" style="height: 4vh;"/></button>
        </div>
        <div class="doce-cinza">
        <button type="button" id="cinza" ><img alt="botao-c" src="./assets/img/docecinza.png" style="height: 4vh;"/></button>
        </div>
      </div>
      <div class="campo-moedas">
        <button type="button" @click="umreal"><img alt="1 real" src="./assets/img/1real.png"  style="transition: ease 0.5s;" height="170" width="170"/></button>
        <button type="button" @click="doisreais"><img alt="2 real" src="./assets/img/2reais.png" style="transition: ease 0.5s;" height="170" width="170"/></button>
        <button type="button" @click="cincoreais"><img alt="5 real" src="./assets/img/5reais.png" style="transition: ease 0.5s;" height="170" width="170"></button>
      </div>
    </div>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
  import ronco from "@/assets/sound/ronco.mp3";
  import coin from "@/assets/sound/coin.mp4";
  import win from "@/assets/sound/tuturu.mp4";
  import banido from "@/assets/sound/banido.mp4";

  export default{
    data(){
      return{
        creditos: 0,
        raiva: 0,
      }
    },
    methods:{
      umreal(){
        const music = new Audio(coin);
        music.play(); 
        this.creditos = this.creditos + 1
      },
      doisreais(){
        const music = new Audio(coin);
        music.play(); 
        this.creditos = this.creditos + 2
      },
      cincoreais(){
        const music = new Audio(coin);
        music.play(); 
        this.creditos = this.creditos + 5
      },
      botaoA(){
        if(this.creditos >= 6){ 
        const calculo = this.creditos - 6
        alert("Voce recebeu o Doce A (Laranja)"+"\n"+ "Troco: R$ " + calculo +'.00')
        this.creditos = 0
        document.getElementById("laranja").animate([
          { transform: 'translateY(0px)'},
          { transform: 'translateY(90px)'},
        ], {
          duration: 1500,
          iterations: 1
        })
        const music = new Audio(win);
        music.play();
        }else{
          alert("Credito Insuficiente")
        }
      },
      botaoB(){
        if(this.creditos >= 7){
        const calculo = this.creditos - 7
        alert("Voce recebeu o Doce B (Rosa)"+"\n"+ "Troco: R$ " + calculo +'.00')
        this.creditos = 0
        document.getElementById("rosa").animate([
          { transform: 'translateY(0px)'},
          { transform: 'translateY(90px)'},
        ], {
          duration: 1500,
          iterations: 1
        })
        const music = new Audio(win);
        music.play();
        }else{
          alert("Credito Insuficiente")
        }
      },
      botaoC(){
        if(this.creditos >= 8){
        const calculo = this.creditos - 8
        alert("Voce recebeu o Doce C (Cinza)"+"\n"+ "Troco: R$ " + calculo +'.00')
        this.creditos = 0
        document.getElementById("cinza").animate([
          { transform: 'translateY(0px)'},
          { transform: 'translateY(90px)'},
        ], {
          duration: 1500,
          iterations: 1
        })
        const music = new Audio(win);
        music.play();
        }else{
          alert("Credito Insuficiente")
        }
      },
      gato_maluco(){
        this.raiva = this.raiva + 1
        if (this.raiva == 3){
          const music = new Audio(ronco);
          music.play();
        }if(this.raiva == 4){
          const music2 = new Audio(banido);
          music2.play();
        }if(this.raiva == 5){
          window.close();
        }else{
          alert("Não Acorde o Gato")
        }
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
  height: 100%;
  background-image: url(./assets/img/background.png);
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,229,168,1) 0%, rgba(251,174,222,1) 100.7% );
  background-repeat: repeat;
}
/* #--FIM-BACKGROUND--# */

#gato{
  position:relative; 
  top:7vh; 
  left:54vh;
  height: 10vh;
  z-index: 33;
  /* cursor: pointer; */
}

/* #--DIVIDE O HTML EM DUAS COLUNAS--# */
.base_grid{
  display: grid;
  grid-template-columns: 100vh 0vh 0vh 100vh;
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
  z-index: 1;
  background-color: transparent;
}
/* #--FIM TAMPA PRETA MAQUINA--# */

.doces-comprados{
  display: flex;
  flex-direction: row;
  height: 10px;
}

.doce-laranja> button{
  position:absolute; 
  top:84vh; 
  left:58vh;
  border: none;
  background-color: transparent;
  z-index: 0;
}
.doce-rosa > button{
  position:absolute; 
  top:84vh; 
  left:56vh;
  border: none;
  background-color: transparent;
  z-index: 0;
}
.doce-cinza > button{
  position:absolute; 
  top:84vh; 
  left:58vh;
  border: none;
  background-color: transparent;
  z-index: 0;
}

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
