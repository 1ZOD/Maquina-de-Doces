<template>
  <div class="principal-grid">
    <div class="quadrado-preto">
      <div class="texto-quadrado">Grupo 5<br></div>
    </div>
    <div>
      <div class="texto-grupo">
        <br>Nathan Marrega 81913620 <br>
        <br>Gabriel Lucena dos Santos	819146592 <br>
        <br>Rodrigo Souza Lins	819164766 <br>
        <br>Gabriel Santos de Carvalho	819151151  <br>
        <br>Pedro Henrique Martini	819147220 <br>
        <br>Vinicius Vizza Campos	819145197 <br>
        <br>Vitor Gonçalves Pereira Colazelli	819110980<br>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.principal-grid{
  display: flex;
  flex-direction: column;
  padding-inline: 5vw;
}
.quadrado-preto {
  height: 40vh;
  width: 100%;
  background-color: #000;
  color: #fff;
  text-align: center;
}
.texto-quadrado {
    font-family: 'Poppins';
    padding-top: 13vh;
    font-size: 10vh;
    line-height: 64px;
}
.texto-grupo {
    font-family: 'Poppins';
    text-align: center;
    padding-top: 1vh;
    font-size: 5vh;
    line-height: 64px;
}
</style>
