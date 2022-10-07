<template>
  <div class id="app">
    <div class="container">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn">Home</router-link>
          <router-link to="/Doces" class="btn">Doces</router-link>
          <router-link to="/Elevador" class="btn">Elevador</router-link>
          <router-link to="/analisador" class="btn">Analisador</router-link>
        </section>
      </header>
      <router-view/>
    </div>
  </div>
</template>

<style>

.navbar{
  background-image: linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% );
  text-align: center;
  height: 3vh;
  padding-top: 0.5vh; 
  /* box-shadow: 12px 9px 17px 0px rgba(39, 74, 126, 0.137); */
}

.btn{
  padding-inline: 5vh;
  text-decoration: none;
  color: black;
  font-family: "Segoe UI", Arial, sans-serif;
}
</style>
