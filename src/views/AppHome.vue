<template>
  <div id="home">
    <header id="header-container">
      <div class="title-header">
        <h2>amandine divay</h2>
      </div>
      <div id="line-section"></div>
      <div class="title-header">
        <h2>portfolio</h2>
      </div>
    </header>
    <NavBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/TheNavbar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .title-header{
    display: flex; 
    align-items: center;
    height: 10vh;
  }

  #line-section{
    border-top: 1px solid black;
    margin: 0 5vw 0 5vw; 
  }

  h2{
    text-transform: uppercase;
  }
</style>
